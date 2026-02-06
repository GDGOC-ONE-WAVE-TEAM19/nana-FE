# FriendshipRead

친구 관계 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**requester_id** | **string** |  | [default to undefined]
**addressee_id** | **string** |  | [default to undefined]
**status** | [**FriendshipStatus**](FriendshipStatus.md) |  | [default to undefined]
**blocked_by** | **string** |  | [optional] [default to undefined]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]

## Example

```typescript
import { FriendshipRead } from './api';

const instance: FriendshipRead = {
    id,
    requester_id,
    addressee_id,
    status,
    blocked_by,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
