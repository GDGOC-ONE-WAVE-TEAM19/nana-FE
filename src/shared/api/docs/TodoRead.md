# TodoRead

Todo 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**deadline** | **string** |  | [optional] [default to undefined]
**tag_group_id** | **string** |  | [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**status** | [**TodoStatus**](TodoStatus.md) |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**tags** | [**Array&lt;TagRead&gt;**](TagRead.md) |  | [optional] [default to undefined]
**schedules** | [**Array&lt;ScheduleRead&gt;**](ScheduleRead.md) |  | [optional] [default to undefined]
**include_reason** | [**TodoIncludeReason**](TodoIncludeReason.md) |  | [optional] [default to undefined]
**owner_id** | **string** |  | [optional] [default to undefined]
**visibility_level** | [**VisibilityLevel**](VisibilityLevel.md) |  | [optional] [default to undefined]
**is_shared** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { TodoRead } from './api';

const instance: TodoRead = {
    id,
    title,
    description,
    deadline,
    tag_group_id,
    parent_id,
    status,
    created_at,
    tags,
    schedules,
    include_reason,
    owner_id,
    visibility_level,
    is_shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
