# Semantic Release Replace Plugin

![Build](https://github.com/google/semantic-release-replace-plugin/workflows/Build/badge.svg)
![Release](https://github.com/google/semantic-release-replace-plugin/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/google/semantic-release-replace-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/google/semantic-release-replace-plugin)
![GitHub contributors](https://img.shields.io/github/contributors/google/semantic-release-replace-plugin?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Install

```bash
$ npm install @google/semantic-release-replace-plugin -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    [
      "@google/semantic-release-replace-plugin",
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
    ]
  ]
}
```

## Options

Please refer to the [documentation](./docs/README.md) for more options.
- [PluginConfig](./docs/interfaces/pluginconfig.md)
- [Replacements](./docs/interfaces/replacement.md)
