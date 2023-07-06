semantic-release-replace-plugin

# semantic-release-replace-plugin

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

[index.ts:26](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L26)

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

[index.ts:27](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L27)

___

### To

Ƭ **To**: `string` \| [`ToCallback`](README.md#tocallback)

#### Defined in

[index.ts:31](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L31)

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

[index.ts:32](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L32)

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

[index.ts:163](https://github.com/jpoehnelt/semantic-release-replace-plugin/blob/c94a018/src/index.ts#L163)
