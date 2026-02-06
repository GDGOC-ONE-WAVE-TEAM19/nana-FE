# VisibilitySettings

가시성 설정 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**VisibilityLevel**](VisibilityLevel.md) |  | [optional] [default to undefined]
**allowed_user_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowed_emails** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowed_domains** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { VisibilitySettings } from './api';

const instance: VisibilitySettings = {
    level,
    allowed_user_ids,
    allowed_emails,
    allowed_domains,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
