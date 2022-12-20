@google/semantic-release-replace-plugin

# @google/semantic-release-replace-plugin

## Table of contents

### Interfaces

- [PluginConfig](interfaces/PluginConfig.md)
- [Replacement](interfaces/Replacement.md)

### Type Aliases

- [From](README.md#from)
- [FromCallback](README.md#fromcallback)
- [To](README.md#to)
- [ToCallback](README.md#tocallback)

### Functions

- [prepare](README.md#prepare)

## Type Aliases

### From

Ƭ **From**: [`FromCallback`](README.md#fromcallback) \| `RegExp` \| `string`

#### Defined in

[index.ts:25](https://github.com/google/semantic-release-replace-plugin/blob/1579d05/src/index.ts#L25)

___

### FromCallback

Ƭ **FromCallback**: (`filename`: `string`, ...`args`: `unknown`[]) => `RegExp` \| `string`

#### Type declaration

▸ (`filename`, `...args`): `RegExp` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `...args` | `unknown`[] |

##### Returns

`RegExp` \| `string`

#### Defined in

[index.ts:26](https://github.com/google/semantic-release-replace-plugin/blob/1579d05/src/index.ts#L26)

___

### To

Ƭ **To**: `string` \| [`ToCallback`](README.md#tocallback)

#### Defined in

[index.ts:27](https://github.com/google/semantic-release-replace-plugin/blob/1579d05/src/index.ts#L27)

___

### ToCallback

Ƭ **ToCallback**: (`match`: `string`, ...`args`: `unknown`[]) => `string`

#### Type declaration

▸ (`match`, `...args`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `match` | `string` |
| `...args` | `unknown`[] |

##### Returns

`string`

#### Defined in

[index.ts:28](https://github.com/google/semantic-release-replace-plugin/blob/1579d05/src/index.ts#L28)

## Functions

### prepare

▸ **prepare**(`PluginConfig`, `context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `PluginConfig` | [`PluginConfig`](interfaces/PluginConfig.md) |
| `context` | `Context` |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:161](https://github.com/google/semantic-release-replace-plugin/blob/1579d05/src/index.ts#L161)
