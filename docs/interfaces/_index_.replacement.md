**[@google/semantic-release-replace-plugin](../README.md)**

> [Globals](../README.md) / ["index"](../modules/_index_.md) / Replacement

# Interface: Replacement

Replacement is simlar to the interface used by https://www.npmjs.com/package/replace-in-file
with the difference being the single string for `to` and `from`.

## Hierarchy

* **Replacement**

## Index

### Properties

* [allowEmptyPaths](_index_.replacement.md#allowemptypaths)
* [countMatches](_index_.replacement.md#countmatches)
* [disableGlobs](_index_.replacement.md#disableglobs)
* [dry](_index_.replacement.md#dry)
* [encoding](_index_.replacement.md#encoding)
* [files](_index_.replacement.md#files)
* [from](_index_.replacement.md#from)
* [ignore](_index_.replacement.md#ignore)
* [results](_index_.replacement.md#results)
* [to](_index_.replacement.md#to)

## Properties

### allowEmptyPaths

• `Optional` **allowEmptyPaths**: boolean

*Defined in [index.ts:56](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L56)*

___

### countMatches

• `Optional` **countMatches**: boolean

*Defined in [index.ts:57](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L57)*

___

### disableGlobs

• `Optional` **disableGlobs**: boolean

*Defined in [index.ts:58](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L58)*

___

### dry

• `Optional` **dry**: boolean

*Defined in [index.ts:60](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L60)*

___

### encoding

• `Optional` **encoding**: string

*Defined in [index.ts:59](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L59)*

___

### files

•  **files**: string[]

*Defined in [index.ts:31](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L31)*

files to search for replacements

___

### from

•  **from**: string

*Defined in [index.ts:37](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L37)*

The RegExp pattern to use to match.

Uses `String.replace(new RegExp(s, 'g'), to)` for implementation.

___

### ignore

• `Optional` **ignore**: string[]

*Defined in [index.ts:55](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L55)*

___

### results

• `Optional` **results**: { file: string ; hasChanged: boolean ; numMatches?: number ; numReplacements?: number  }[]

*Defined in [index.ts:65](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L65)*

The results array can be passed to ensure that the expected replacements
have been made, and if not, throw and exception with the diff.

___

### to

•  **to**: string \| (a: string) => string

*Defined in [index.ts:54](https://github.com/Borduhh/semantic-release-replace-plugin/blob/6dd4918/src/index.ts#L54)*

The replacement value using a template of variables.

`__VERSION__ = "${nextRelease.version}"`

The context object is used to render the template. Additional values
can be found at: https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api#result

For advacned replacement, pass in a function to replace non-standard variables
```
{
   from: `__VERSION__ = 11`, // eslint-disable-line
   to: (matched) => `__VERSION: ${parseInt(matched.split('=')[1].trim()) + 1}`, // eslint-disable-line
 },
```
