/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from "fs-extra";
import * as path from "path";
import * as tmp from "tmp";

import { prepare } from "../src/index";

const context = {
  nextRelease: {
    type: "major" as const,
    gitTag: "2.0.0",
    version: "2.0.0",
    notes: "",
    gitHead: "asdfasdf",
  },
  logger: {
    log: jest.fn(),
    error: console.error,
  },
  env: process.env,
};

let d: tmp.DirSyncObject;

beforeEach(() => {
  // @ts-ignore-next-line
  d = tmp.dirSync({ unsafeCleanup: true });
  fs.copySync("__tests__/project", d.name);
});

afterEach(() => {
  // @ts-ignore-next-line
  d.removeCallback();
});

async function assertFileContents(name: string, expected: string) {
  const actual = await fs.readFileSync(path.join(d.name, name), "utf-8");
  expect(actual).toEqual(expected);
}

async function assertFileContentsContain(name: string, expected: string) {
  const actual = await fs.readFileSync(path.join(d.name, name), "utf-8");
  expect.stringContaining(expected);
}

test("prepare should replace using regex", async () => {
  const replacements = [
    {
      files: [path.join(d.name, "/*.py")],
      from: '__VERSION__ = ".*"',
      to: '__VERSION__ = "${nextRelease.version}"',
    },
    {
      files: [path.join(d.name, "/build.gradle")],
      from: "version = '.*'",
      to: "version = '${nextRelease.version}'",
    },
  ];

  await prepare({ replacements }, context);

  await assertFileContentsContain(
    "__init__.py",
    `__VERSION__ = "${context.nextRelease.version}"`
  );
  await assertFileContents(
    "build.gradle",
    `version = '${context.nextRelease.version}'`
  );
});

test("prepare should use result check", async () => {
  const replacements = [
    {
      files: [path.join(d.name, "/*.py")],
      from: '__VERSION__ = "1.0.0"',
      to: '__VERSION__ = "${nextRelease.version}"',
      results: [
        {
          file: path.join(d.name, "/__init__.py"),
          hasChanged: true,
          numMatches: 1,
          numReplacements: 1,
        },
      ],
      countMatches: true,
    },
  ];

  await prepare({ replacements }, context);

  await assertFileContentsContain(
    "__init__.py",
    `__VERSION__ = "${context.nextRelease.version}"`
  );
});

test("prepare should throw error if result mismatch", async () => {
  const replacements = [
    {
      files: [path.join(d.name, "/*")],
      from: '__VERSION__ = "1.0.0"',
      to: '__VERSION__ = "${nextRelease.version}"',
      results: [],
      countMatches: true,
    },
  ];
  await expect(prepare({ replacements }, context)).rejects.toThrow();
});

test("prepare should use result check", async () => {
  const replacements = [
    {
      files: [path.join(d.name, "/*.py")],
      from: '__VERSION__ = "1.0.0"',
      to: '__VERSION__ = "${nextRelease.version}"',
      results: [
        {
          file: path.join(d.name, "/__init__.py"),
          hasChanged: true,
          numMatches: 1,
          numReplacements: 1,
        },
      ],
      countMatches: true,
    },
  ];

  await prepare({ replacements }, context);

  await assertFileContentsContain(
    "__init__.py",
    `__VERSION__ = "${context.nextRelease.version}"`
  );
});

test("replacements are global", async () => {
  const replacements = [
    {
      files: [path.join(d.name, "/*.md")],
      from: "foo@.*",
      to: 'foo@"${nextRelease.version}"',
      results: [
        {
          file: path.join(d.name, "/foo.md"),
          hasChanged: true,
          numMatches: 2,
          numReplacements: 2,
        },
      ],
      countMatches: true,
    },
  ];

  await prepare({ replacements }, context);

  // Will throw if results do not match
});

test("prepare should replace using function", async () => {
  const replacements = [
    {
      files: [path.join(d.name, "/*.py")],
      from: '__VERSION__ = ".*"',
      to: (match) => `__VERSION__ = 2`,
    },
    {
      files: [path.join(d.name, "/build.gradle")],
      from: "version = '.*'",
      to: (match) => "version = 2",
    },
  ];

  await prepare({ replacements }, context);

  await assertFileContentsContain("__init__.py", `__VERSION__ = 2`);
  await assertFileContents("build.gradle", "version = 2");
});
