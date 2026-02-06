# AvailabilityRead

참여자별 가능 시간 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participant** | [**ParticipantRead**](ParticipantRead.md) |  | [default to undefined]
**time_slots** | [**Array&lt;TimeSlotRead&gt;**](TimeSlotRead.md) |  | [default to undefined]

## Example

```typescript
import { AvailabilityRead } from './api';

const instance: AvailabilityRead = {
    participant,
    time_slots,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
