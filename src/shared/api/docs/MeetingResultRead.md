# MeetingResultRead

공통 가능 시간 분석 결과 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meeting** | [**MeetingRead**](MeetingRead.md) |  | [default to undefined]
**availability_grid** | **{ [key: string]: { [key: string]: number; }; }** |  | [default to undefined]

## Example

```typescript
import { MeetingResultRead } from './api';

const instance: MeetingResultRead = {
    meeting,
    availability_grid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
