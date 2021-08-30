**[@google/semantic-release-replace-plugin](../README.md)**

> [Globals](../README.md) / ["index"](../modules/_index_.md) / PluginConfig

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

## Hierarchy

* **PluginConfig**

## Index

### Properties

* [replacements](_index_.pluginconfig.md#replacements)

## Properties

### replacements

•  **replacements**: [Replacement](_index_.replacement.md)[]

*Defined in [index.ts:101](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L101)*

An array of replacements to be made.
