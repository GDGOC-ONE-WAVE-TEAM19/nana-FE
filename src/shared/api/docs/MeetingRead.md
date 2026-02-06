# MeetingRead

일정 조율 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**owner_id** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**start_date** | **string** |  | [default to undefined]
**end_date** | **string** |  | [default to undefined]
**available_days** | **Array&lt;number&gt;** |  | [default to undefined]
**start_time** | **string** |  | [default to undefined]
**end_time** | **string** |  | [default to undefined]
**time_slot_minutes** | **number** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**visibility_level** | [**VisibilityLevel**](VisibilityLevel.md) |  | [optional] [default to undefined]
**is_shared** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { MeetingRead } from './api';

const instance: MeetingRead = {
    id,
    owner_id,
    title,
    description,
    start_date,
    end_date,
    available_days,
    start_time,
    end_time,
    time_slot_minutes,
    created_at,
    updated_at,
    visibility_level,
    is_shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
