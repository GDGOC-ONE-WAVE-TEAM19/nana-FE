# FriendsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptFriendRequestV1FriendsRequestsFriendshipIdAcceptPost**](#acceptfriendrequestv1friendsrequestsfriendshipidacceptpost) | **POST** /v1/friends/requests/{friendship_id}/accept | Accept Friend Request|
|[**blockUserV1FriendsBlockUserIdPost**](#blockuserv1friendsblockuseridpost) | **POST** /v1/friends/block/{user_id} | Block User|
|[**cancelFriendRequestV1FriendsRequestsFriendshipIdDelete**](#cancelfriendrequestv1friendsrequestsfriendshipiddelete) | **DELETE** /v1/friends/requests/{friendship_id} | Cancel Friend Request|
|[**checkFriendshipV1FriendsCheckUserIdGet**](#checkfriendshipv1friendscheckuseridget) | **GET** /v1/friends/check/{user_id} | Check Friendship|
|[**listFriendIdsV1FriendsIdsGet**](#listfriendidsv1friendsidsget) | **GET** /v1/friends/ids | List Friend Ids|
|[**listFriendsV1FriendsGet**](#listfriendsv1friendsget) | **GET** /v1/friends | List Friends|
|[**listReceivedRequestsV1FriendsRequestsReceivedGet**](#listreceivedrequestsv1friendsrequestsreceivedget) | **GET** /v1/friends/requests/received | List Received Requests|
|[**listSentRequestsV1FriendsRequestsSentGet**](#listsentrequestsv1friendsrequestssentget) | **GET** /v1/friends/requests/sent | List Sent Requests|
|[**rejectFriendRequestV1FriendsRequestsFriendshipIdRejectPost**](#rejectfriendrequestv1friendsrequestsfriendshipidrejectpost) | **POST** /v1/friends/requests/{friendship_id}/reject | Reject Friend Request|
|[**removeFriendV1FriendsFriendshipIdDelete**](#removefriendv1friendsfriendshipiddelete) | **DELETE** /v1/friends/{friendship_id} | Remove Friend|
|[**sendFriendRequestV1FriendsRequestsPost**](#sendfriendrequestv1friendsrequestspost) | **POST** /v1/friends/requests | Send Friend Request|
|[**unblockUserV1FriendsBlockUserIdDelete**](#unblockuserv1friendsblockuseriddelete) | **DELETE** /v1/friends/block/{user_id} | Unblock User|

# **acceptFriendRequestV1FriendsRequestsFriendshipIdAcceptPost**
> FriendshipRead acceptFriendRequestV1FriendsRequestsFriendshipIdAcceptPost()

친구 요청 수락  받은 친구 요청을 수락합니다. 요청 수신자만 수락할 수 있습니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let friendshipId: string; // (default to undefined)

const { status, data } = await apiInstance.acceptFriendRequestV1FriendsRequestsFriendshipIdAcceptPost(
    friendshipId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendshipId** | [**string**] |  | defaults to undefined|


### Return type

**FriendshipRead**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blockUserV1FriendsBlockUserIdPost**
> FriendshipRead blockUserV1FriendsBlockUserIdPost()

사용자 차단  특정 사용자를 차단합니다. 차단된 사용자는 친구 요청을 보낼 수 없고, 공유된 콘텐츠에 접근할 수 없습니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.blockUserV1FriendsBlockUserIdPost(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**FriendshipRead**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelFriendRequestV1FriendsRequestsFriendshipIdDelete**
> any cancelFriendRequestV1FriendsRequestsFriendshipIdDelete()

보낸 친구 요청 취소  보낸 친구 요청을 취소합니다. 요청 발신자만 취소할 수 있습니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let friendshipId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelFriendRequestV1FriendsRequestsFriendshipIdDelete(
    friendshipId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendshipId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFriendshipV1FriendsCheckUserIdGet**
> boolean checkFriendshipV1FriendsCheckUserIdGet()

친구 여부 확인  특정 사용자와 친구인지 확인합니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.checkFriendshipV1FriendsCheckUserIdGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFriendIdsV1FriendsIdsGet**
> Array<string | null> listFriendIdsV1FriendsIdsGet()

친구 ID 목록만 조회 (효율적인 쿼리)  친구 목록을 빠르게 확인할 때 사용합니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

const { status, data } = await apiInstance.listFriendIdsV1FriendsIdsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<string | null>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFriendsV1FriendsGet**
> Array<FriendRead> listFriendsV1FriendsGet()

친구 목록 조회  현재 사용자의 모든 친구 목록을 반환합니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

const { status, data } = await apiInstance.listFriendsV1FriendsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FriendRead>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listReceivedRequestsV1FriendsRequestsReceivedGet**
> Array<PendingRequestRead> listReceivedRequestsV1FriendsRequestsReceivedGet()

받은 친구 요청 목록 조회  대기 중인 친구 요청만 반환합니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

const { status, data } = await apiInstance.listReceivedRequestsV1FriendsRequestsReceivedGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PendingRequestRead>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSentRequestsV1FriendsRequestsSentGet**
> Array<PendingRequestRead> listSentRequestsV1FriendsRequestsSentGet()

보낸 친구 요청 목록 조회  대기 중인 친구 요청만 반환합니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

const { status, data } = await apiInstance.listSentRequestsV1FriendsRequestsSentGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PendingRequestRead>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rejectFriendRequestV1FriendsRequestsFriendshipIdRejectPost**
> any rejectFriendRequestV1FriendsRequestsFriendshipIdRejectPost()

친구 요청 거절  받은 친구 요청을 거절합니다. 거절된 요청은 삭제됩니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let friendshipId: string; // (default to undefined)

const { status, data } = await apiInstance.rejectFriendRequestV1FriendsRequestsFriendshipIdRejectPost(
    friendshipId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendshipId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeFriendV1FriendsFriendshipIdDelete**
> any removeFriendV1FriendsFriendshipIdDelete()

친구 삭제  친구 관계를 끊습니다. 양쪽 모두 삭제할 수 있습니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let friendshipId: string; // (default to undefined)

const { status, data } = await apiInstance.removeFriendV1FriendsFriendshipIdDelete(
    friendshipId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendshipId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendFriendRequestV1FriendsRequestsPost**
> FriendshipRead sendFriendRequestV1FriendsRequestsPost(friendRequest)

친구 요청 보내기  대상 사용자에게 친구 요청을 보냅니다. 이미 친구이거나 대기 중인 요청이 있으면 에러가 발생합니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration,
    FriendRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let friendRequest: FriendRequest; //

const { status, data } = await apiInstance.sendFriendRequestV1FriendsRequestsPost(
    friendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendRequest** | **FriendRequest**|  | |


### Return type

**FriendshipRead**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unblockUserV1FriendsBlockUserIdDelete**
> any unblockUserV1FriendsBlockUserIdDelete()

사용자 차단 해제  차단을 해제합니다. 본인이 차단한 경우에만 해제할 수 있습니다.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.unblockUserV1FriendsBlockUserIdDelete(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

