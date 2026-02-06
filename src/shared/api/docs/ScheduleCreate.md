# ScheduleCreate

일정 생성 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**start_time** | **string** |  | [default to undefined]
**end_time** | **string** |  | [default to undefined]
**recurrence_rule** | **string** |  | [optional] [default to undefined]
**recurrence_end** | **string** |  | [optional] [default to undefined]
**tag_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**tag_group_id** | **string** |  | [optional] [default to undefined]
**source_todo_id** | **string** |  | [optional] [default to undefined]
**state** | [**ScheduleState**](ScheduleState.md) |  | [optional] [default to undefined]
**create_todo_options** | [**CreateTodoOptions**](CreateTodoOptions.md) |  | [optional] [default to undefined]
**visibility** | [**AppDomainScheduleSchemaDtoVisibilitySettings**](AppDomainScheduleSchemaDtoVisibilitySettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ScheduleCreate } from './api';

const instance: ScheduleCreate = {
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
    create_todo_options,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
