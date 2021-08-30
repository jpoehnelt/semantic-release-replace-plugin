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

import { ReplaceInFileConfig, replaceInFile } from "replace-in-file";
import { isEqual, template } from "lodash";

import { Context } from "semantic-release";
import diffDefault from "jest-diff";

/**
 * Replacement is simlar to the interface used by https://www.npmjs.com/package/replace-in-file
 * with the difference being the single string for `to` and `from`.
 */
export interface Replacement {
  /**
   * files to search for replacements
   */
  files: string[];
  /**
   * The RegExp pattern to use to match.
   *
   * Uses `String.replace(new RegExp(s, 'g'), to)` for implementation.
   */
  from: string;
  /**
   * The replacement value using a template of variables.
   *
   * `__VERSION__ = "${nextRelease.version}"`
   *
   * The context object is used to render the template. Additional values
   * can be found at: https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api#result
   *
   * For advanced replacement (NOTE: only for use with `release.config.js` file version), pass in a function to replace non-standard variables
   * ```
   * {
   *    from: `__VERSION__ = 11`, // eslint-disable-line
   *    to: (matched) => `__VERSION: ${parseInt(matched.split('=')[1].trim()) + 1}`, // eslint-disable-line
   *  },
   * ```
   */
  to: string | ((a: string) => string);
  ignore?: string[];
  allowEmptyPaths?: boolean;
  countMatches?: boolean;
  disableGlobs?: boolean;
  encoding?: string;
  dry?: boolean;
  /**
   * The results array can be passed to ensure that the expected replacements
   * have been made, and if not, throw and exception with the diff.
   */
  results?: {
    file: string;
    hasChanged: boolean;
    numMatches?: number;
    numReplacements?: number;
  }[];
}
/**
 * PluginConfig is used to provide multiple replacement.
 *
 * ```
 * [
 *   "@google/semantic-release-replace-plugin",
 *   {
 *     "replacements": [
 *       {
 *         "files": ["foo/__init__.py"],
 *         "from": "__VERSION__ = \".*\"",
 *         "to": "__VERSION__ = \"${nextRelease.version}\"",
 *         "results": [
 *           {
 *             "file": "foo/__init__.py",
 *             "hasChanged": true,
 *             "numMatches": 1,
 *             "numReplacements": 1
 *           }
 *         ],
 *         "countMatches": true
 *       }
 *     ]
 *   }
 * ]
 * ```
 */
export interface PluginConfig {
  /** An array of replacements to be made. */
  replacements: Replacement[];
}

export async function prepare(
  PluginConfig: PluginConfig,
  context: Context
): Promise<void> {
  for (const replacement of PluginConfig.replacements) {
    let { results } = replacement;

    delete replacement.results;

    const replaceInFileConfig = replacement as ReplaceInFileConfig;

    replaceInFileConfig.to =
      typeof replacement.to === "function"
        ? replacement.to
        : template(replacement.to)({ ...context });
    replaceInFileConfig.from = new RegExp(replacement.from, "gm");

    let actual = await replaceInFile(replaceInFileConfig);

    if (results) {
      results = results.sort();
      actual = actual.sort();

      if (!isEqual(actual.sort(), results.sort())) {
        throw new Error(
          `Expected match not found!\n${diffDefault(actual, results)}`
        );
      }
    }
  }
}
