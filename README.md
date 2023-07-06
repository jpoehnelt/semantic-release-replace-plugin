# Semantic Release Replace Plugin

[![npm](https://img.shields.io/npm/v/semantic-release-replace-plugin)](https://www.npmjs.com/package/semantic-release-replace-plugin)
![Build](https://github.com/jpoehnelt/semantic-release-replace-plugin/workflows/Build/badge.svg)
![Release](https://github.com/jpoehnelt/semantic-release-replace-plugin/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/jpoehnelt/semantic-release-replace-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/jpoehnelt/semantic-release-replace-plugin)
![GitHub contributors](https://img.shields.io/github/contributors/jpoehnelt/semantic-release-replace-plugin?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

The `semantic-release-replace-plugin` plugin provides functionality to update version strings throughout a project. This enables semantic release to be used in many different languages and build processes.

Read more about [Semantic Release](https://semantic-release.gitbook.io/).

## Install

```bash
$ npm install semantic-release-replace-plugin -D
```

## Usage

The following example uses this plugin to demonstrate using semantic-release in a Python package where `__VERSION__` is defined in the root `__init__.py` file.

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    [
      "semantic-release-replace-plugin",
      {
        "replacements": [
          {
            "files": ["foo/__init__.py"],
            "from": "__VERSION__ = \".*\"",
            "to": "__VERSION__ = \"${nextRelease.version}\"",
            "results": [
              {
                "file": "foo/__init__.py",
                "hasChanged": true,
                "numMatches": 1,
                "numReplacements": 1
              }
            ],
            "countMatches": true
          }
        ]
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["foo/*.py"]
      }
    ]
  ]
}
```
### Validation

The presence of the `results` array will trigger validation that a replacement has been made. This is optional but recommended.

### Warning

This plugin will not commit changes unless you specify assets for the @semantic-release/git plugin! This is highlighted below.

```
[
  "@semantic-release/git",
  {
    "assets": ["foo/*.py"]
  }
]
```

## Options

Please refer to the [documentation](./docs/README.md) for more options.
