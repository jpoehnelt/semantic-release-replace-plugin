[@google/semantic-release-replace-plugin](../README.md) › ["index"](../modules/_index_.md) › [Replacement](_index_.replacement.md)

# Interface: Replacement

Replacement is simlar to the interface used by https://www.npmjs.com/package/replace-in-file
with the difference being the single string for `to` and `from`.

## Hierarchy

* **Replacement**

## Index

### Properties

* [allowEmptyPaths](_index_.replacement.md#optional-allowemptypaths)
* [countMatches](_index_.replacement.md#optional-countmatches)
* [disableGlobs](_index_.replacement.md#optional-disableglobs)
* [dry](_index_.replacement.md#optional-dry)
* [encoding](_index_.replacement.md#optional-encoding)
* [files](_index_.replacement.md#files)
* [from](_index_.replacement.md#from)
* [ignore](_index_.replacement.md#optional-ignore)
* [results](_index_.replacement.md#optional-results)
* [to](_index_.replacement.md#to)

## Properties

### `Optional` allowEmptyPaths

• **allowEmptyPaths**? : *boolean*

*Defined in [index.ts:48](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L48)*

___

### `Optional` countMatches

• **countMatches**? : *boolean*

*Defined in [index.ts:49](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L49)*

___

### `Optional` disableGlobs

• **disableGlobs**? : *boolean*

*Defined in [index.ts:50](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L50)*

___

### `Optional` dry

• **dry**? : *boolean*

*Defined in [index.ts:52](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L52)*

___

### `Optional` encoding

• **encoding**? : *string*

*Defined in [index.ts:51](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L51)*

___

###  files

• **files**: *string[]*

*Defined in [index.ts:31](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L31)*

files to search for replacements

___

###  from

• **from**: *string*

*Defined in [index.ts:37](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L37)*

The RegExp pattern to use to match.

Uses `String.replace(new RegExp(s, 'g'), to)` for implementation.

___

### `Optional` ignore

• **ignore**? : *string[]*

*Defined in [index.ts:47](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L47)*

___

### `Optional` results

• **results**? : *object[]*

*Defined in [index.ts:57](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L57)*

The results array can be passed to ensure that the expected replacements
have been made, and if not, throw and exception with the diff.

___

###  to

• **to**: *string*

*Defined in [index.ts:46](https://github.com/google/semantic-release-replace-plugin/blob/master/src/index.ts#L46)*

The replacement value using a template of variables.

`__VERSION__ = "${nextRelease.version}"`

The context object is used to render the template. Additional values
can be found at: https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api#result
