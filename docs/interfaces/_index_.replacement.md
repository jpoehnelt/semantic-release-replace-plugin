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

*Defined in [index.ts:63](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L63)*

___

### countMatches

• `Optional` **countMatches**: boolean

*Defined in [index.ts:64](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L64)*

___

### disableGlobs

• `Optional` **disableGlobs**: boolean

*Defined in [index.ts:65](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L65)*

___

### dry

• `Optional` **dry**: boolean

*Defined in [index.ts:67](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L67)*

___

### encoding

• `Optional` **encoding**: string

*Defined in [index.ts:66](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L66)*

___

### files

•  **files**: string[]

*Defined in [index.ts:31](https://github.com/google/semantic-release-replace-plugin/blob/70b91ae/src/index.ts#L31)*

files to search for replacements

___

### from

•  **from**: From

*Defined in [index.ts:44](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L44)*

The RegExp pattern to use to match.

Uses `String.replace(new RegExp(s, 'gm'), to)` for implementation, if
`from` is a string.

For advanced matching, i.e. when using a `release.config.js` file, consult
the documentation of the `replace-in-file` package
(https://github.com/adamreisnz/replace-in-file/blob/main/README.md) on its
`from` option. This allows explicit specification of `RegExp`s, callback
functions, etc.

___

### ignore

• `Optional` **ignore**: string[]

*Defined in [index.ts:62](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L62)*

___

### results

• `Optional` **results**: { file: string ; hasChanged: boolean ; numMatches?: number ; numReplacements?: number  }[]

*Defined in [index.ts:72](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L72)*

The results array can be passed to ensure that the expected replacements
have been made, and if not, throw and exception with the diff.

___

### to

•  **to**: string \| (a: string) => string

*Defined in [index.ts:61](https://github.com/google/semantic-release-replace-plugin/blob/eefac95/src/index.ts#L61)*

The replacement value using a template of variables.

`__VERSION__ = "${nextRelease.version}"`

The context object is used to render the template. Additional values
can be found at: https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api#result

For advanced replacement (NOTE: only for use with `release.config.js` file version), pass in a function to replace non-standard variables
```
{
   from: `__VERSION__ = 11`, // eslint-disable-line
   to: (matched) => `__VERSION: ${parseInt(matched.split('=')[1].trim()) + 1}`, // eslint-disable-line
 },
```
