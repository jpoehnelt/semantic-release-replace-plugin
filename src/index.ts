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

// Redefine `replace-in-file` config's `From` type for its callback variant to
// be compatible with passing in the `semantic-release` `Context`.
type From = FromCallback | RegExp | string;
type FromCallback = (filename: string, ...args: unknown[]) => RegExp | string;

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
   * Uses `String.replace(new RegExp(s, 'gm'), to)` for implementation, if
   * `from` is a string.
   *
   * For advanced matching, i.e. when using a `release.config.js` file, consult
   * the documentation of the `replace-in-file` package
   * (https://github.com/adamreisnz/replace-in-file/blob/main/README.md) on its
   * `from` option. This allows explicit specification of `RegExp`s, callback
   * functions, etc.
   *
   * Multiple matchers may be provided as an array, following the same
   * conversion rules as mentioned above.
   */
  from: From | From[];
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
   *
   * The `args` for a callback function can take a variety of shapes. In its
   * simplest form, e.g. if `from` is a string, it's the filename in which the
   * replacement is done. If `from` is a regular expression the `args` of the
   * callback include captures, the offset of the matched string, the matched
   * string, etc. See the `String.replace` documentation for details
   */
  to: string | ((match: string, ...args: unknown[]) => string);
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

/**
 * Wraps the `callback` in a new function that passes the `context` as the
 * final argument to the `callback` when it gets called.
 */
function applyContextTo(callback: Function, context: Context) {
  return (...args: unknown[]) => callback.apply(null, args.concat(context));
}

/**
 * Normalizes a `value` into an array, making it more straightforward to apply
 * logic to a single value of type `T` or an array of those values.
 */
function normalizeToArray<T>(value: T | T[]): T[] {
  return value instanceof Array ? value : [value];
}

export async function prepare(
  PluginConfig: PluginConfig,
  context: Context
): Promise<void> {
  for (const replacement of PluginConfig.replacements) {
    let { results } = replacement;

    delete replacement.results;

    const replaceInFileConfig = replacement as ReplaceInFileConfig;

    // The `replace-in-file` package uses `String.replace` under the hood for
    // the actual replacement. If `from` is a string, this means only a
    // single occurence will be replaced. This plugin intents to replace
    // _all_ occurrences when given a string to better support
    // configuration through JSON, this requires conversion into a `RegExp`.
    //
    // If `from` is a callback function, the `context` is passed as the final
    // parameter to the function. In all other cases, e.g. being a
    // `RegExp`, the `from` property does not require any modifications.
    //
    // The `from` property may either be a single value to match or an array of
    // values (in any of the previously described forms)
    replaceInFileConfig.from = normalizeToArray(replacement.from).map(
      (from) => {
        switch (typeof from) {
          case "function":
            return applyContextTo(from, context);
          case "string":
            return new RegExp(from, "gm");
          default:
            return from;
        }
      }
    );

    replaceInFileConfig.to =
      typeof replacement.to === "function"
        ? applyContextTo(replacement.to, context)
        : template(replacement.to)({ ...context });

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
