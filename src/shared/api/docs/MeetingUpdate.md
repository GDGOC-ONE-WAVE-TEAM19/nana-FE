# MeetingUpdate

일정 조율 업데이트 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**start_date** | **string** |  | [optional] [default to undefined]
**end_date** | **string** |  | [optional] [default to undefined]
**available_days** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**start_time** | **string** |  | [optional] [default to undefined]
**end_time** | **string** |  | [optional] [default to undefined]
**time_slot_minutes** | **number** |  | [optional] [default to undefined]
**visibility** | [**VisibilitySettings**](VisibilitySettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MeetingUpdate } from './api';

const instance: MeetingUpdate = {
    title,
    description,
    start_date,
    end_date,
    available_days,
    start_time,
    end_time,
    time_slot_minutes,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
