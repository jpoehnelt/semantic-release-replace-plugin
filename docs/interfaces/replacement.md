[@google/semantic-release-replace-plugin](../README.md) › [Replacement](replacement.md)

# Interface: Replacement

Replacement is simlar to the interface used by https://www.npmjs.com/package/replace-in-file
with the difference being the single string for `to` and `from`.

## Hierarchy

* **Replacement**

## Index

### Properties

* [allowEmptyPaths](replacement.md#optional-allowemptypaths)
* [countMatches](replacement.md#optional-countmatches)
* [disableGlobs](replacement.md#optional-disableglobs)
* [dry](replacement.md#optional-dry)
* [encoding](replacement.md#optional-encoding)
* [files](replacement.md#files)
* [from](replacement.md#from)
* [ignore](replacement.md#optional-ignore)
* [results](replacement.md#optional-results)
* [to](replacement.md#to)

## Properties

### `Optional` allowEmptyPaths

• **allowEmptyPaths**? : *boolean*

Defined in index.ts:48

___

### `Optional` countMatches

• **countMatches**? : *boolean*

Defined in index.ts:49

___

### `Optional` disableGlobs

• **disableGlobs**? : *boolean*

Defined in index.ts:50

___

### `Optional` dry

• **dry**? : *boolean*

Defined in index.ts:52

___

### `Optional` encoding

• **encoding**? : *string*

Defined in index.ts:51

___

###  files

• **files**: *string[]*

Defined in index.ts:31

files to search for replacements

___

###  from

• **from**: *string*

Defined in index.ts:37

The RegExp pattern to use to match.

Uses `String.replace(new RegExp(s, 'g'), to)` for implementation.

___

### `Optional` ignore

• **ignore**? : *string[]*

Defined in index.ts:47

___

### `Optional` results

• **results**? : *object[]*

Defined in index.ts:57

The results array can be passed to ensure that the expected replacements
have been made, and if not, throw and exception with the diff.

___

###  to

• **to**: *string*

Defined in index.ts:46

The replacement value using a template of variables.

`__VERSION__ = "${nextRelease.version}"`

The context object is used to render the template. Additional values
can be found at: https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api#result
