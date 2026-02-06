# TimerUpdate

타이머 업데이트 DTO  todo_id, schedule_id 필드 동작: - 필드가 요청에 포함되지 않음 (undefined): 기존 값 유지 - 필드가 UUID 값: 해당 ID로 연결 변경 - 필드가 null: 연결 해제  Note: 자동 연결 기능은 적용되지 않음 (명시적 변경만 수행)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tag_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**todo_id** | **string** |  | [optional] [default to undefined]
**schedule_id** | **string** |  | [optional] [default to undefined]
**visibility** | [**AppDomainScheduleSchemaDtoVisibilitySettings**](AppDomainScheduleSchemaDtoVisibilitySettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TimerUpdate } from './api';

const instance: TimerUpdate = {
    title,
    description,
    tag_ids,
    todo_id,
    schedule_id,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
