# ScheduleUpdate

일정 업데이트 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**start_time** | **string** |  | [optional] [default to undefined]
**end_time** | **string** |  | [optional] [default to undefined]
**recurrence_rule** | **string** |  | [optional] [default to undefined]
**recurrence_end** | **string** |  | [optional] [default to undefined]
**tag_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**tag_group_id** | **string** |  | [optional] [default to undefined]
**source_todo_id** | **string** |  | [optional] [default to undefined]
**state** | [**ScheduleState**](ScheduleState.md) |  | [optional] [default to undefined]
**visibility** | [**AppDomainScheduleSchemaDtoVisibilitySettings**](AppDomainScheduleSchemaDtoVisibilitySettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ScheduleUpdate } from './api';

const instance: ScheduleUpdate = {
    title,
    description,
    start_time,
    end_time,
    recurrence_rule,
    recurrence_end,
    tag_ids,
    tag_group_id,
    source_todo_id,
    state,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
