"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var m = __importStar(require("./index"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var tmp_1 = __importDefault(require("tmp"));
var vitest_1 = require("vitest");
var index_1 = require("./index");
var context = {
    branch: {
        name: "foo",
    },
    lastRelease: {
        gitHead: "foo",
        gitTag: "v1.0.0",
        version: "1.0.0",
    },
    nextRelease: {
        type: "major",
        gitTag: "2.0.0",
        version: "2.0.0",
        notes: "",
        gitHead: "foo",
    },
    logger: {
        log: vitest_1.vi.fn(),
        error: console.error,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    },
    env: {},
};
var d;
(0, vitest_1.beforeEach)(function () {
    d = tmp_1.default.dirSync({ unsafeCleanup: true });
    fs_extra_1.default.copySync("fixtures", d.name);
});
(0, vitest_1.afterEach)(function () {
    d.removeCallback();
});
function assertFileContents(name, expected) {
    return __awaiter(this, void 0, void 0, function () {
        var actual;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_extra_1.default.readFileSync(path_1.default.join(d.name, name), "utf-8")];
                case 1:
                    actual = _a.sent();
                    (0, vitest_1.expect)(actual).toEqual(expected);
                    return [2 /*return*/];
            }
        });
    });
}
function assertFileContentsContain(name, expected) {
    return __awaiter(this, void 0, void 0, function () {
        var actual;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_extra_1.default.readFileSync(path_1.default.join(d.name, name), "utf-8")];
                case 1:
                    actual = _a.sent();
                    (0, vitest_1.expect)(actual).toEqual(vitest_1.expect.stringContaining(expected));
                    return [2 /*return*/];
            }
        });
    });
}
(0, vitest_1.test)("should expose prepare", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, vitest_1.expect)(m.prepare).toBeDefined();
        return [2 /*return*/];
    });
}); });
(0, vitest_1.test)("prepare should replace using regex", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/*.py")],
                        from: '__VERSION__ = ".*"',
                        to: '__VERSION__ = "${nextRelease.version}"',
                    },
                    {
                        files: [path_1.default.join(d.name, "/build.gradle")],
                        from: "version = '.*'",
                        to: "version = '${nextRelease.version}'",
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _c.sent();
                return [4 /*yield*/, assertFileContentsContain("__init__.py", "__VERSION__ = \"".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version, "\""))];
            case 2:
                _c.sent();
                return [4 /*yield*/, assertFileContents("build.gradle", "version = '".concat((_b = context.nextRelease) === null || _b === void 0 ? void 0 : _b.version, "'"))];
            case 3:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare should use result check", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/*.py")],
                        from: '__VERSION__ = "1.0.0"',
                        to: '__VERSION__ = "${nextRelease.version}"',
                        results: [
                            {
                                file: path_1.default.join(d.name, "/__init__.py"),
                                hasChanged: true,
                                numMatches: 1,
                                numReplacements: 1,
                            },
                        ],
                        countMatches: true,
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("__init__.py", "__VERSION__ = \"".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version, "\""))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare should throw error if result mismatch", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/*")],
                        from: '__VERSION__ = "1.0.0"',
                        to: '__VERSION__ = "${nextRelease.version}"',
                        results: [],
                        countMatches: true,
                    },
                ];
                return [4 /*yield*/, (0, vitest_1.expect)((0, index_1.prepare)({ replacements: replacements }, context)).rejects.toThrow()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare should use result check", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/*.py")],
                        from: '__VERSION__ = "1.0.0"',
                        to: '__VERSION__ = "${nextRelease.version}"',
                        results: [
                            {
                                file: path_1.default.join(d.name, "/__init__.py"),
                                hasChanged: true,
                                numMatches: 1,
                                numReplacements: 1,
                            },
                        ],
                        countMatches: true,
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("__init__.py", "__VERSION__ = \"".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version, "\""))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("replacements are global", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/*.md")],
                        from: "foo@.*",
                        to: 'foo@"${nextRelease.version}"',
                        results: [
                            {
                                file: path_1.default.join(d.name, "/foo.md"),
                                hasChanged: true,
                                numMatches: 2,
                                numReplacements: 2,
                            },
                        ],
                        countMatches: true,
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare should replace using function", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/*.py")],
                        from: '__VERSION__ = ".*"',
                        to: function () { return "__VERSION__ = 2"; },
                    },
                    {
                        files: [path_1.default.join(d.name, "/build.gradle")],
                        from: "version = '.*'",
                        to: function () { return "version = 2"; },
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("__init__.py", "__VERSION__ = 2")];
            case 2:
                _a.sent();
                return [4 /*yield*/, assertFileContents("build.gradle", "version = 2")];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare accepts regular expressions for `from`", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        from: /yarn(.+?)@.*/g,
                        to: "yarn add foo@".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version),
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "npm i foo@1.0.0")];
            case 2:
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "yarn add foo@2.0.0")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare accepts callback functions for `from`", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        from: function (filename) { return "".concat(path_1.default.basename(filename, ".md"), "@1.0.0"); },
                        to: "foo@".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version),
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _b.sent();
                // As `from` ended up being a string after executing the function, only the
                // first occurrence of `foo@1.0.0` in the file should have been replaced.
                // Note that this is different behavior from the case where a string is
                // passed directly to `from` (which the plugin implicitly turns into a global
                // regular expression)
                return [4 /*yield*/, assertFileContentsContain("foo.md", "npm i foo@2.0.0")];
            case 2:
                // As `from` ended up being a string after executing the function, only the
                // first occurrence of `foo@1.0.0` in the file should have been replaced.
                // Note that this is different behavior from the case where a string is
                // passed directly to `from` (which the plugin implicitly turns into a global
                // regular expression)
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "yarn add foo@1.0.0")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare accepts multi-argument `to` callback functions for regular expression `from`", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        from: /npm i (.+)@(.+)`/g,
                        to: (function (match, packageName, version) {
                            var _a, _b;
                            return match
                                .replace(version, (_b = (_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version) !== null && _b !== void 0 ? _b : version)
                                .replace(packageName, packageName.split("").reverse().join(""));
                        }),
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "npm i oof@2.0.0")];
            case 2:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "yarn add foo@1.0.0")];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare passes the `context` as the final function argument to `from` callbacks", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        // Returns a regular expression matching the previous version, so that
                        // _all_ occurrences in the document are updated
                        from: (function (_, context) { var _a; return new RegExp(((_a = context === null || context === void 0 ? void 0 : context.lastRelease) === null || _a === void 0 ? void 0 : _a.version) || "", "g"); }),
                        to: "3.0.0",
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "npm i foo@3.0.0")];
            case 2:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "yarn add foo@3.0.0")];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare passes the `context` as the final function argument to `to` callbacks", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        from: /npm i (.*)@(.*)`/,
                        to: (function (_, package_name) {
                            var _a;
                            var args = [];
                            for (var _i = 2; _i < arguments.length; _i++) {
                                args[_i - 2] = arguments[_i];
                            }
                            var reversed_package_name = package_name.split("").reverse().join("");
                            var context = args.pop();
                            return "npm i ".concat(reversed_package_name, "@").concat((_a = context === null || context === void 0 ? void 0 : context.nextRelease) === null || _a === void 0 ? void 0 : _a.version);
                        }),
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "npm i oof@".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version))];
            case 2:
                _b.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "yarn add foo@1.0.0")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare accepts an array of `from` matchers", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        // Similarly to single string values, strings in arrays should be taken
                        // to mean global replacements for improved JSON configuration
                        // capabilities. The regular expression and function matchers should only
                        // replace a single occurrence and hence only affect the `npm` line
                        from: [
                            "1.0.0",
                            /install with/,
                            function (filename) { return path_1.default.basename(filename, ".md"); },
                        ],
                        to: "bar",
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "bar `npm i bar@bar`")];
            case 2:
                _a.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "install with `yarn add foo@bar`")];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("prepare accepts an array of `to` replacements", function () { return __awaiter(void 0, void 0, void 0, function () {
    var replacements;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                replacements = [
                    {
                        files: [path_1.default.join(d.name, "/foo.md")],
                        from: ["npm i", "1.0.0"],
                        to: [
                            "npm install",
                            function () {
                                var _a;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                var context = args.pop();
                                return ((_a = context === null || context === void 0 ? void 0 : context.nextRelease) === null || _a === void 0 ? void 0 : _a.version) || "";
                            },
                        ],
                    },
                ];
                return [4 /*yield*/, (0, index_1.prepare)({ replacements: replacements }, context)];
            case 1:
                _c.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "npm install foo@".concat((_a = context.nextRelease) === null || _a === void 0 ? void 0 : _a.version))];
            case 2:
                _c.sent();
                return [4 /*yield*/, assertFileContentsContain("foo.md", "yarn add foo@".concat((_b = context.nextRelease) === null || _b === void 0 ? void 0 : _b.version))];
            case 3:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
