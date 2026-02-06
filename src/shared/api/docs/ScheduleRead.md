# ScheduleRead

일정 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**start_time** | **string** |  | [default to undefined]
**end_time** | **string** |  | [default to undefined]
**recurrence_rule** | **string** |  | [optional] [default to undefined]
**recurrence_end** | **string** |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**tag_group_id** | **string** |  | [optional] [default to undefined]
**source_todo_id** | **string** |  | [optional] [default to undefined]
**state** | [**ScheduleState**](ScheduleState.md) |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**tags** | [**Array&lt;TagRead&gt;**](TagRead.md) |  | [optional] [default to undefined]
**owner_id** | **string** |  | [optional] [default to undefined]
**visibility_level** | [**VisibilityLevel**](VisibilityLevel.md) |  | [optional] [default to undefined]
**is_shared** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ScheduleRead } from './api';

const instance: ScheduleRead = {
    id,
    title,
    description,
    start_time,
    end_time,
    recurrence_rule,
    recurrence_end,
    parent_id,
    tag_group_id,
    source_todo_id,
    state,
    created_at,
    tags,
    owner_id,
    visibility_level,
    is_shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
