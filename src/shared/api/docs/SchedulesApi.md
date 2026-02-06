# SchedulesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createScheduleV1SchedulesPost**](#createschedulev1schedulespost) | **POST** /v1/schedules | Create Schedule|
|[**createTodoFromScheduleV1SchedulesScheduleIdTodoPost**](#createtodofromschedulev1schedulesscheduleidtodopost) | **POST** /v1/schedules/{schedule_id}/todo | Create Todo From Schedule|
|[**deleteScheduleV1SchedulesScheduleIdDelete**](#deleteschedulev1schedulesscheduleiddelete) | **DELETE** /v1/schedules/{schedule_id} | Delete Schedule|
|[**getActiveTimerV1SchedulesScheduleIdTimersActiveGet**](#getactivetimerv1schedulesscheduleidtimersactiveget) | **GET** /v1/schedules/{schedule_id}/timers/active | Get Active Timer|
|[**getScheduleTimersV1SchedulesScheduleIdTimersGet**](#getscheduletimersv1schedulesscheduleidtimersget) | **GET** /v1/schedules/{schedule_id}/timers | Get Schedule Timers|
|[**readScheduleV1SchedulesScheduleIdGet**](#readschedulev1schedulesscheduleidget) | **GET** /v1/schedules/{schedule_id} | Read Schedule|
|[**readSchedulesV1SchedulesGet**](#readschedulesv1schedulesget) | **GET** /v1/schedules | Read Schedules|
|[**updateScheduleV1SchedulesScheduleIdPatch**](#updateschedulev1schedulesscheduleidpatch) | **PATCH** /v1/schedules/{schedule_id} | Update Schedule|

# **createScheduleV1SchedulesPost**
> ScheduleRead createScheduleV1SchedulesPost(scheduleCreate)

새 일정 생성  FastAPI Best Practices: - async 라우트 사용 - 트랜잭션 자동 관리 (context manager) - Exception Handler가 예외 처리

### Example

```typescript
import {
    SchedulesApi,
    Configuration,
    ScheduleCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleCreate: ScheduleCreate; //
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.createScheduleV1SchedulesPost(
    scheduleCreate,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleCreate** | **ScheduleCreate**|  | |
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**ScheduleRead**

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

# **createTodoFromScheduleV1SchedulesScheduleIdTodoPost**
> any createTodoFromScheduleV1SchedulesScheduleIdTodoPost()

기존 Schedule에서 연관된 Todo 생성  Schedule의 정보를 기반으로 새로운 Todo를 생성합니다: - Todo의 title, description은 Schedule에서 복사 - Todo의 deadline은 Schedule의 start_time으로 설정 - Schedule의 태그가 Todo에도 복사됨 - 생성된 Todo와 Schedule이 source_todo_id로 연결됨  제약사항: - 이미 Todo와 연결된 Schedule에서는 호출 불가 (400 에러) - tag_group_id는 필수 파라미터  :param schedule_id: Schedule ID :param tag_group_id: Todo가 속할 TagGroup ID :return: 생성된 Todo

### Example

```typescript
import {
    SchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleId: string; // (default to undefined)
let tagGroupId: string; //Todo가 속할 TagGroup ID (필수) (default to undefined)

const { status, data } = await apiInstance.createTodoFromScheduleV1SchedulesScheduleIdTodoPost(
    scheduleId,
    tagGroupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleId** | [**string**] |  | defaults to undefined|
| **tagGroupId** | [**string**] | Todo가 속할 TagGroup ID (필수) | defaults to undefined|


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
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteScheduleV1SchedulesScheduleIdDelete**
> any deleteScheduleV1SchedulesScheduleIdDelete()

일정 삭제 (반복 일정 인스턴스 포함)  일반 일정과 가상 인스턴스 모두 지원: - 일반 일정: schedule_id로 조회하여 삭제 - 가상 인스턴스: schedule_id를 parent_id로 사용하고 instance_start를 쿼리 파라미터로 전송  FastAPI Best Practices: - Service는 session을 받아서 CRUD 직접 사용 - 가상 인스턴스인 경우 instance_start 쿼리 파라미터로 처리

### Example

```typescript
import {
    SchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleId: string; // (default to undefined)
let instanceStart: string; //반복 일정 인스턴스 시작 시간 (ISO 8601 형식) (optional) (default to undefined)

const { status, data } = await apiInstance.deleteScheduleV1SchedulesScheduleIdDelete(
    scheduleId,
    instanceStart
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleId** | [**string**] |  | defaults to undefined|
| **instanceStart** | [**string**] | 반복 일정 인스턴스 시작 시간 (ISO 8601 형식) | (optional) defaults to undefined|


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

# **getActiveTimerV1SchedulesScheduleIdTimersActiveGet**
> TimerRead getActiveTimerV1SchedulesScheduleIdTimersActiveGet()

일정의 현재 활성 타이머 조회 (RUNNING 또는 PAUSED, 공유된 일정 포함)  활성 타이머가 없으면 404를 반환합니다.

### Example

```typescript
import {
    SchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleId: string; // (default to undefined)
let includeSchedule: boolean; //Schedule 정보 포함 여부 (기본값: false) (optional) (default to false)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getActiveTimerV1SchedulesScheduleIdTimersActiveGet(
    scheduleId,
    includeSchedule,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleId** | [**string**] |  | defaults to undefined|
| **includeSchedule** | [**boolean**] | Schedule 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**TimerRead**

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

# **getScheduleTimersV1SchedulesScheduleIdTimersGet**
> Array<TimerRead> getScheduleTimersV1SchedulesScheduleIdTimersGet()

일정의 모든 타이머 조회 (공유된 일정 포함)

### Example

```typescript
import {
    SchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleId: string; // (default to undefined)
let includeSchedule: boolean; //Schedule 정보 포함 여부 (기본값: false) (optional) (default to false)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getScheduleTimersV1SchedulesScheduleIdTimersGet(
    scheduleId,
    includeSchedule,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleId** | [**string**] |  | defaults to undefined|
| **includeSchedule** | [**boolean**] | Schedule 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**Array<TimerRead>**

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

# **readScheduleV1SchedulesScheduleIdGet**
> ScheduleRead readScheduleV1SchedulesScheduleIdGet()

ID로 일정 조회 (공유된 일정 포함)  본인 소유 일정 또는 공유 접근 권한이 있는 일정을 조회합니다. 접근 권한이 없으면 403 Forbidden을 반환합니다.

### Example

```typescript
import {
    SchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleId: string; // (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.readScheduleV1SchedulesScheduleIdGet(
    scheduleId,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleId** | [**string**] |  | defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**ScheduleRead**

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

# **readSchedulesV1SchedulesGet**
> Array<ScheduleRead> readSchedulesV1SchedulesGet()

날짜 범위 기반 일정 조회 (반복 일정 포함, 태그 필터링 지원)  조회 범위 (scope): - mine: 내 일정만 (기본값) - shared: 공유된 타인의 일정만 - all: 내 일정 + 공유된 일정  날짜 범위: - start_date: 조회 시작 날짜/시간 (필수) - end_date: 조회 종료 날짜/시간 (필수) - 지정된 날짜 범위와 겹치는 모든 일정을 반환 (반복 일정은 가상 인스턴스로 확장)  태그 필터링: - tag_ids: AND 방식 (모든 지정 태그를 포함한 일정만 반환) - group_ids: 해당 그룹의 태그 중 하나라도 있는 일정 반환 - 둘 다 지정 시: 그룹 필터링 후 태그 필터링 적용  FastAPI Best Practices: - async 라우트 사용

### Example

```typescript
import {
    SchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let startDate: string; //조회 시작 날짜/시간 (ISO 8601 형식) (default to undefined)
let endDate: string; //조회 종료 날짜/시간 (ISO 8601 형식) (default to undefined)
let scope: ResourceScope; //조회 범위: mine(내 일정만), shared(공유된 일정만), all(모두) (optional) (default to undefined)
let tagIds: Array<string>; //태그 ID 리스트 (AND 방식: 모든 지정 태그를 포함한 일정만 반환) (optional) (default to undefined)
let groupIds: Array<string>; //태그 그룹 ID 리스트 (해당 그룹의 태그를 가진 일정 반환) (optional) (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.readSchedulesV1SchedulesGet(
    startDate,
    endDate,
    scope,
    tagIds,
    groupIds,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] | 조회 시작 날짜/시간 (ISO 8601 형식) | defaults to undefined|
| **endDate** | [**string**] | 조회 종료 날짜/시간 (ISO 8601 형식) | defaults to undefined|
| **scope** | **ResourceScope** | 조회 범위: mine(내 일정만), shared(공유된 일정만), all(모두) | (optional) defaults to undefined|
| **tagIds** | **Array&lt;string&gt;** | 태그 ID 리스트 (AND 방식: 모든 지정 태그를 포함한 일정만 반환) | (optional) defaults to undefined|
| **groupIds** | **Array&lt;string&gt;** | 태그 그룹 ID 리스트 (해당 그룹의 태그를 가진 일정 반환) | (optional) defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**Array<ScheduleRead>**

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

# **updateScheduleV1SchedulesScheduleIdPatch**
> ScheduleRead updateScheduleV1SchedulesScheduleIdPatch(scheduleUpdate)

일정 업데이트 (반복 일정 인스턴스 포함)  일반 일정과 가상 인스턴스 모두 지원: - 일반 일정: schedule_id로 조회하여 업데이트 - 가상 인스턴스: schedule_id를 parent_id로 사용하고 instance_start를 쿼리 파라미터로 전송  ### 요청 예시 ```json {     \"title\": \"업데이트된 제목\" } ```  FastAPI Best Practices: - Service는 session을 받아서 CRUD 직접 사용 - 가상 인스턴스인 경우 instance_start 쿼리 파라미터로 처리

### Example

```typescript
import {
    SchedulesApi,
    Configuration,
    ScheduleUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new SchedulesApi(configuration);

let scheduleId: string; // (default to undefined)
let scheduleUpdate: ScheduleUpdate; //
let instanceStart: string; //반복 일정 인스턴스 시작 시간 (ISO 8601 형식) (optional) (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.updateScheduleV1SchedulesScheduleIdPatch(
    scheduleId,
    scheduleUpdate,
    instanceStart,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleUpdate** | **ScheduleUpdate**|  | |
| **scheduleId** | [**string**] |  | defaults to undefined|
| **instanceStart** | [**string**] | 반복 일정 인스턴스 시작 시간 (ISO 8601 형식) | (optional) defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**ScheduleRead**

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

