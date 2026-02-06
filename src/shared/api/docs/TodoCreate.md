# TodoCreate

Todo 생성 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tag_group_id** | **string** |  | [default to undefined]
**tag_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**deadline** | **string** |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**status** | [**TodoStatus**](TodoStatus.md) |  | [optional] [default to undefined]
**visibility** | [**AppDomainScheduleSchemaDtoVisibilitySettings**](AppDomainScheduleSchemaDtoVisibilitySettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TodoCreate } from './api';

const instance: TodoCreate = {
    title,
    description,
    tag_group_id,
    tag_ids,
    deadline,
    parent_id,
    status,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
