[semantic-release-replace-plugin](../README.md) / Replacement

# Interface: Replacement

Replacement is similar to the interface used by https://www.npmjs.com/package/replace-in-file
with the difference being the single string for `to` and `from`.

## Table of contents

### Properties

- [allowEmptyPaths](Replacement.md#allowemptypaths)
- [countMatches](Replacement.md#countmatches)
- [disableGlobs](Replacement.md#disableglobs)
- [dry](Replacement.md#dry)
- [encoding](Replacement.md#encoding)
- [files](Replacement.md#files)
- [from](Replacement.md#from)
- [ignore](Replacement.md#ignore)
- [results](Replacement.md#results)
- [to](Replacement.md#to)

## Properties

### allowEmptyPaths

• `Optional` **allowEmptyPaths**: `boolean`

#### Defined in

[index.ts:87](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L87)

___

### countMatches

• `Optional` **countMatches**: `boolean`

#### Defined in

[index.ts:88](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L88)

___

### disableGlobs

• `Optional` **disableGlobs**: `boolean`

#### Defined in

[index.ts:89](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L89)

___

### dry

• `Optional` **dry**: `boolean`

#### Defined in

[index.ts:91](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L91)

___

### encoding

• `Optional` **encoding**: `string`

#### Defined in

[index.ts:90](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L90)

___

### files

• **files**: `string`[]

files to search for replacements

#### Defined in

[index.ts:42](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L42)

___

### from

• **from**: [`From`](../README.md#from) \| [`From`](../README.md#from)[]

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

#### Defined in

[index.ts:58](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L58)

___

### ignore

• `Optional` **ignore**: `string`[]

#### Defined in

[index.ts:86](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L86)

___

### results

• `Optional` **results**: { `file`: `string` ; `hasChanged`: `boolean` ; `numMatches?`: `number` ; `numReplacements?`: `number`  }[]

The results array can be passed to ensure that the expected replacements
have been made, and if not, throw and exception with the diff.

#### Defined in

[index.ts:96](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L96)

___

### to

• **to**: [`To`](../README.md#to) \| [`To`](../README.md#to)[]

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

Multiple replacements may be specified as an array. These can be either
strings or callback functions. Note that the amount of replacements needs
to match the amount of `from` matchers.

#### Defined in

[index.ts:85](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L85)
