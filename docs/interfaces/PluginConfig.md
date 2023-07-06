[semantic-release-replace-plugin](../README.md) / PluginConfig

# Interface: PluginConfig

PluginConfig is used to provide multiple replacement.

```
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
```

## Table of contents

### Properties

- [replacements](PluginConfig.md#replacements)

## Properties

### replacements

• **replacements**: [`Replacement`](Replacement.md)[]

An array of replacements to be made.

#### Defined in

[index.ts:132](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L132)
