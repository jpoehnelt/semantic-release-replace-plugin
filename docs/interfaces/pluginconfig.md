[@google/semantic-release-replace-plugin](../README.md) › [PluginConfig](pluginconfig.md)

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

* [replacements](pluginconfig.md#replacements)

## Properties

###  replacements

• **replacements**: *[Replacement](replacement.md)[]*

Defined in index.ts:93

An array of replacements to be made.
