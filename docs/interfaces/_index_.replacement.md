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

*Defined in [index.ts:77](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L77)*

___

### countMatches

• `Optional` **countMatches**: boolean

*Defined in [index.ts:78](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L78)*

___

### disableGlobs

• `Optional` **disableGlobs**: boolean

*Defined in [index.ts:79](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L79)*

___

### dry

• `Optional` **dry**: boolean

*Defined in [index.ts:81](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L81)*

___

### encoding

• `Optional` **encoding**: string

*Defined in [index.ts:80](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L80)*

___

### files

•  **files**: string[]

*Defined in [index.ts:36](https://github.com/google/semantic-release-replace-plugin/blob/1cdf9e4/src/index.ts#L36)*

files to search for replacements

___

### from

•  **from**: From \| From[]

*Defined in [index.ts:52](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L52)*

The RegExp pattern to use to match.

Uses `String.replace(new RegExp(s, 'gm'), to)` for implementation, if
`from` is a string.

For advanced matching, i.e. when using a `release.config.js` file, consult
the documentation of the `replace-in-file` package
(https://github.com/adamreisnz/replace-in-file/blob/main/README.md) on its
`from` option. This allows explicit specification of `RegExp`s, callback
functions, etc.

Multiple matchers may be provided as an array, following the same
conversion rules as mentioned above.

___

### ignore

• `Optional` **ignore**: string[]

*Defined in [index.ts:76](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L76)*

___

### results

• `Optional` **results**: { file: string ; hasChanged: boolean ; numMatches?: number ; numReplacements?: number  }[]

*Defined in [index.ts:86](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L86)*

The results array can be passed to ensure that the expected replacements
have been made, and if not, throw and exception with the diff.

___

### to

•  **to**: string \| (match: string, ...args: unknown[]) => string

*Defined in [index.ts:75](https://github.com/google/semantic-release-replace-plugin/blob/997c65a/src/index.ts#L75)*

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

The `args` for a callback function can take a variety of shapes. In its
simplest form, e.g. if `from` is a string, it's the filename in which the
replacement is done. If `from` is a regular expression the `args` of the
callback include captures, the offset of the matched string, the matched
string, etc. See the `String.replace` documentation for details
