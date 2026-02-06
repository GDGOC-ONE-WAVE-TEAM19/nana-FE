# TimerRead

타이머 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**schedule_id** | **string** |  | [optional] [default to undefined]
**todo_id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**allocated_duration** | **number** |  | [default to undefined]
**elapsed_time** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**started_at** | **string** |  | [optional] [default to undefined]
**paused_at** | **string** |  | [optional] [default to undefined]
**ended_at** | **string** |  | [optional] [default to undefined]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**pause_history** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**schedule** | [**ScheduleRead**](ScheduleRead.md) |  | [optional] [default to undefined]
**todo** | [**TodoRead**](TodoRead.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;TagRead&gt;**](TagRead.md) |  | [optional] [default to undefined]
**owner_id** | **string** |  | [optional] [default to undefined]
**visibility_level** | [**VisibilityLevel**](VisibilityLevel.md) |  | [optional] [default to undefined]
**is_shared** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { TimerRead } from './api';

const instance: TimerRead = {
    id,
    schedule_id,
    todo_id,
    title,
    description,
    allocated_duration,
    elapsed_time,
    status,
    started_at,
    paused_at,
    ended_at,
    created_at,
    updated_at,
    pause_history,
    schedule,
    todo,
    tags,
    owner_id,
    visibility_level,
    is_shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
