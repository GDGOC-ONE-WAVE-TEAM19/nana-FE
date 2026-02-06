# Preset

프리셋 전체 정의  프리셋 JSON 파일의 루트 구조입니다. 하나의 TagGroup과 그에 속한 Tag들, Todo들을 정의합니다.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tag_group** | [**PresetTagGroup**](PresetTagGroup.md) |  | [default to undefined]
**tags** | [**Array&lt;PresetTag&gt;**](PresetTag.md) |  | [optional] [default to undefined]
**todos** | [**Array&lt;PresetTodo&gt;**](PresetTodo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Preset } from './api';

const instance: Preset = {
    name,
    description,
    tag_group,
    tags,
    todos,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
