# MeetingCreate

일정 조율 생성 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**start_date** | **string** |  | [default to undefined]
**end_date** | **string** |  | [default to undefined]
**available_days** | **Array&lt;number&gt;** |  | [default to undefined]
**start_time** | **string** |  | [default to undefined]
**end_time** | **string** |  | [default to undefined]
**time_slot_minutes** | **number** |  | [optional] [default to 30]
**visibility** | [**VisibilitySettings**](VisibilitySettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MeetingCreate } from './api';

const instance: MeetingCreate = {
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
