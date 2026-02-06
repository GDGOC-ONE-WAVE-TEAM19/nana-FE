# MeetingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMeetingV1MeetingsPost**](#createmeetingv1meetingspost) | **POST** /v1/meetings | Create Meeting|
|[**createParticipantV1MeetingsMeetingIdParticipatePost**](#createparticipantv1meetingsmeetingidparticipatepost) | **POST** /v1/meetings/{meeting_id}/participate | Create Participant|
|[**deleteMeetingV1MeetingsMeetingIdDelete**](#deletemeetingv1meetingsmeetingiddelete) | **DELETE** /v1/meetings/{meeting_id} | Delete Meeting|
|[**getAvailabilityV1MeetingsMeetingIdAvailabilityGet**](#getavailabilityv1meetingsmeetingidavailabilityget) | **GET** /v1/meetings/{meeting_id}/availability | Get Availability|
|[**getMeetingResultV1MeetingsMeetingIdResultGet**](#getmeetingresultv1meetingsmeetingidresultget) | **GET** /v1/meetings/{meeting_id}/result | Get Meeting Result|
|[**readMeetingV1MeetingsMeetingIdGet**](#readmeetingv1meetingsmeetingidget) | **GET** /v1/meetings/{meeting_id} | Read Meeting|
|[**readMeetingsV1MeetingsGet**](#readmeetingsv1meetingsget) | **GET** /v1/meetings | Read Meetings|
|[**setAvailabilityV1MeetingsMeetingIdAvailabilityPut**](#setavailabilityv1meetingsmeetingidavailabilityput) | **PUT** /v1/meetings/{meeting_id}/availability | Set Availability|
|[**updateMeetingV1MeetingsMeetingIdPatch**](#updatemeetingv1meetingsmeetingidpatch) | **PATCH** /v1/meetings/{meeting_id} | Update Meeting|

# **createMeetingV1MeetingsPost**
> MeetingRead createMeetingV1MeetingsPost(meetingCreate)

일정 조율 생성  인증 필수: 일정 조율 생성자는 소유자가 됩니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration,
    MeetingCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingCreate: MeetingCreate; //
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.createMeetingV1MeetingsPost(
    meetingCreate,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingCreate** | **MeetingCreate**|  | |
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**MeetingRead**

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

# **createParticipantV1MeetingsMeetingIdParticipatePost**
> ParticipantRead createParticipantV1MeetingsMeetingIdParticipatePost(participantCreate)

참여자 등록  인증 필수: 접근 권한이 있는 사용자만 참여 가능합니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration,
    ParticipantCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)
let participantCreate: ParticipantCreate; //
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.createParticipantV1MeetingsMeetingIdParticipatePost(
    meetingId,
    participantCreate,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **participantCreate** | **ParticipantCreate**|  | |
| **meetingId** | [**string**] |  | defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**ParticipantRead**

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

# **deleteMeetingV1MeetingsMeetingIdDelete**
> any deleteMeetingV1MeetingsMeetingIdDelete()

일정 조율 삭제  인증 필수: 소유자만 삭제 가능합니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteMeetingV1MeetingsMeetingIdDelete(
    meetingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingId** | [**string**] |  | defaults to undefined|


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

# **getAvailabilityV1MeetingsMeetingIdAvailabilityGet**
> Array<AvailabilityRead> getAvailabilityV1MeetingsMeetingIdAvailabilityGet()

전체 참여자의 가능 시간 조회  인증 선택적: 접근 권한이 있는 경우 조회 가능합니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getAvailabilityV1MeetingsMeetingIdAvailabilityGet(
    meetingId,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingId** | [**string**] |  | defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**Array<AvailabilityRead>**

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

# **getMeetingResultV1MeetingsMeetingIdResultGet**
> MeetingResultRead getMeetingResultV1MeetingsMeetingIdResultGet()

공통 가능 시간 분석 결과 조회  인증 선택적: 접근 권한이 있는 경우 조회 가능합니다. 모든 참여자의 시간 선택을 집계하여 겹치는 시간대와 인원 수를 계산합니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getMeetingResultV1MeetingsMeetingIdResultGet(
    meetingId,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingId** | [**string**] |  | defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**MeetingResultRead**

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

# **readMeetingV1MeetingsMeetingIdGet**
> MeetingRead readMeetingV1MeetingsMeetingIdGet()

일정 조율 상세 조회  인증 선택적: 접근 권한이 있는 경우 조회 가능합니다. - PUBLIC: 인증 없이도 조회 가능 (현재는 인증 필수로 처리) - ALLOWED_EMAILS: 허용된 이메일 사용자만 조회 가능 (인증 필수)  Note: PUBLIC 레벨의 비인증 접근은 추후 구현 예정

### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.readMeetingV1MeetingsMeetingIdGet(
    meetingId,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingId** | [**string**] |  | defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**MeetingRead**

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

# **readMeetingsV1MeetingsGet**
> Array<MeetingRead> readMeetingsV1MeetingsGet()

내가 생성한 일정 조율 목록 조회  인증 필수: 본인이 생성한 일정 조율만 조회됩니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.readMeetingsV1MeetingsGet(
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**Array<MeetingRead>**

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

# **setAvailabilityV1MeetingsMeetingIdAvailabilityPut**
> Array<TimeSlotRead> setAvailabilityV1MeetingsMeetingIdAvailabilityPut(timeSlotCreate)

참여자의 가능 시간 설정  인증 필수: 본인의 참여 시간만 설정 가능합니다. 기존 시간 슬롯을 모두 삭제하고 새로운 시간 슬롯을 설정합니다.  :param meeting_id: 일정 조율 ID :param participant_id: 참여자 ID (쿼리 파라미터) :param time_slots: 시간 슬롯 리스트 (요청 본문)

### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)
let participantId: string; //참여자 ID (default to undefined)
let timeSlotCreate: Array<TimeSlotCreate>; //

const { status, data } = await apiInstance.setAvailabilityV1MeetingsMeetingIdAvailabilityPut(
    meetingId,
    participantId,
    timeSlotCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeSlotCreate** | **Array<TimeSlotCreate>**|  | |
| **meetingId** | [**string**] |  | defaults to undefined|
| **participantId** | [**string**] | 참여자 ID | defaults to undefined|


### Return type

**Array<TimeSlotRead>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMeetingV1MeetingsMeetingIdPatch**
> MeetingRead updateMeetingV1MeetingsMeetingIdPatch(meetingUpdate)

일정 조율 수정  인증 필수: 소유자만 수정 가능합니다.

### Example

```typescript
import {
    MeetingsApi,
    Configuration,
    MeetingUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: string; // (default to undefined)
let meetingUpdate: MeetingUpdate; //
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.updateMeetingV1MeetingsMeetingIdPatch(
    meetingId,
    meetingUpdate,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingUpdate** | **MeetingUpdate**|  | |
| **meetingId** | [**string**] |  | defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**MeetingRead**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

