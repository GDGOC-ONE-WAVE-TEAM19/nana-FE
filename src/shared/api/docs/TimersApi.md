# TimersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteTimerV1TimersTimerIdDelete**](#deletetimerv1timerstimeriddelete) | **DELETE** /v1/timers/{timer_id} | Delete Timer|
|[**getTimerV1TimersTimerIdGet**](#gettimerv1timerstimeridget) | **GET** /v1/timers/{timer_id} | Get Timer|
|[**getUserActiveTimerV1TimersActiveGet**](#getuseractivetimerv1timersactiveget) | **GET** /v1/timers/active | Get User Active Timer|
|[**listTimersV1TimersGet**](#listtimersv1timersget) | **GET** /v1/timers | List Timers|
|[**updateTimerV1TimersTimerIdPatch**](#updatetimerv1timerstimeridpatch) | **PATCH** /v1/timers/{timer_id} | Update Timer|

# **deleteTimerV1TimersTimerIdDelete**
> any deleteTimerV1TimersTimerIdDelete()

타이머 삭제

### Example

```typescript
import {
    TimersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimersApi(configuration);

let timerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTimerV1TimersTimerIdDelete(
    timerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timerId** | [**string**] |  | defaults to undefined|


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

# **getTimerV1TimersTimerIdGet**
> TimerRead getTimerV1TimersTimerIdGet()

타이머 조회 (공유된 타이머 포함)  본인 소유 타이머 또는 공유 접근 권한이 있는 타이머를 조회합니다. 접근 권한이 없으면 403 Forbidden을 반환합니다.

### Example

```typescript
import {
    TimersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimersApi(configuration);

let timerId: string; // (default to undefined)
let includeSchedule: boolean; //Schedule 정보 포함 여부 (기본값: false) (optional) (default to false)
let includeTodo: boolean; //Todo 정보 포함 여부 (기본값: false) (optional) (default to false)
let tagIncludeMode: TagIncludeMode; //태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) (optional) (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getTimerV1TimersTimerIdGet(
    timerId,
    includeSchedule,
    includeTodo,
    tagIncludeMode,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timerId** | [**string**] |  | defaults to undefined|
| **includeSchedule** | [**boolean**] | Schedule 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **includeTodo** | [**boolean**] | Todo 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **tagIncludeMode** | **TagIncludeMode** | 태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) | (optional) defaults to undefined|
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

# **getUserActiveTimerV1TimersActiveGet**
> TimerRead getUserActiveTimerV1TimersActiveGet()

사용자의 현재 활성 타이머 조회 (RUNNING 또는 PAUSED)  활성 타이머가 없으면 404 반환 여러 개가 있으면 가장 최근 것 반환

### Example

```typescript
import {
    TimersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimersApi(configuration);

let includeSchedule: boolean; //Schedule 정보 포함 여부 (기본값: false) (optional) (default to false)
let includeTodo: boolean; //Todo 정보 포함 여부 (기본값: false) (optional) (default to false)
let tagIncludeMode: TagIncludeMode; //태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) (optional) (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getUserActiveTimerV1TimersActiveGet(
    includeSchedule,
    includeTodo,
    tagIncludeMode,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeSchedule** | [**boolean**] | Schedule 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **includeTodo** | [**boolean**] | Todo 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **tagIncludeMode** | **TagIncludeMode** | 태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) | (optional) defaults to undefined|
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

# **listTimersV1TimersGet**
> Array<TimerRead> listTimersV1TimersGet()

타이머 목록 조회  조회 범위 (scope): - mine: 내 타이머만 (기본값) - shared: 공유된 타인의 타이머만 - all: 내 타이머 + 공유된 타이머  필터링 옵션: - status: 상태 필터 (RUNNING, PAUSED, COMPLETED, CANCELLED) - 복수 선택 가능 - type: 타입 필터   - independent: 독립 타이머 (schedule_id=null AND todo_id=null)   - schedule: Schedule 연결 타이머 (schedule_id != null)   - todo: Todo 연결 타이머 (todo_id != null) - start_date, end_date: 날짜 범위 필터 (started_at 기준)

### Example

```typescript
import {
    TimersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimersApi(configuration);

let scope: ResourceScope; //조회 범위: mine(내 타이머만), shared(공유된 타이머만), all(모두) (optional) (default to undefined)
let status: Array<string>; //상태 필터 (RUNNING, PAUSED, COMPLETED, CANCELLED) - 복수 선택 가능 (optional) (default to undefined)
let type: string; //타입 필터: independent(독립 타이머), schedule(Schedule 연결), todo(Todo 연결) (optional) (default to undefined)
let startDate: string; //시작 날짜 필터 (started_at 기준, ISO 8601 형식) (optional) (default to undefined)
let endDate: string; //종료 날짜 필터 (started_at 기준, ISO 8601 형식) (optional) (default to undefined)
let includeSchedule: boolean; //Schedule 정보 포함 여부 (기본값: false) (optional) (default to false)
let includeTodo: boolean; //Todo 정보 포함 여부 (기본값: false) (optional) (default to false)
let tagIncludeMode: TagIncludeMode; //태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) (optional) (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.listTimersV1TimersGet(
    scope,
    status,
    type,
    startDate,
    endDate,
    includeSchedule,
    includeTodo,
    tagIncludeMode,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scope** | **ResourceScope** | 조회 범위: mine(내 타이머만), shared(공유된 타이머만), all(모두) | (optional) defaults to undefined|
| **status** | **Array&lt;string&gt;** | 상태 필터 (RUNNING, PAUSED, COMPLETED, CANCELLED) - 복수 선택 가능 | (optional) defaults to undefined|
| **type** | [**string**] | 타입 필터: independent(독립 타이머), schedule(Schedule 연결), todo(Todo 연결) | (optional) defaults to undefined|
| **startDate** | [**string**] | 시작 날짜 필터 (started_at 기준, ISO 8601 형식) | (optional) defaults to undefined|
| **endDate** | [**string**] | 종료 날짜 필터 (started_at 기준, ISO 8601 형식) | (optional) defaults to undefined|
| **includeSchedule** | [**boolean**] | Schedule 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **includeTodo** | [**boolean**] | Todo 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **tagIncludeMode** | **TagIncludeMode** | 태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) | (optional) defaults to undefined|
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

# **updateTimerV1TimersTimerIdPatch**
> TimerRead updateTimerV1TimersTimerIdPatch(timerUpdate)

타이머 메타데이터 업데이트 (title, description, tags)

### Example

```typescript
import {
    TimersApi,
    Configuration,
    TimerUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new TimersApi(configuration);

let timerId: string; // (default to undefined)
let timerUpdate: TimerUpdate; //
let includeSchedule: boolean; //Schedule 정보 포함 여부 (기본값: false) (optional) (default to false)
let includeTodo: boolean; //Todo 정보 포함 여부 (기본값: false) (optional) (default to false)
let tagIncludeMode: TagIncludeMode; //태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) (optional) (default to undefined)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.updateTimerV1TimersTimerIdPatch(
    timerId,
    timerUpdate,
    includeSchedule,
    includeTodo,
    tagIncludeMode,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timerUpdate** | **TimerUpdate**|  | |
| **timerId** | [**string**] |  | defaults to undefined|
| **includeSchedule** | [**boolean**] | Schedule 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **includeTodo** | [**boolean**] | Todo 정보 포함 여부 (기본값: false) | (optional) defaults to false|
| **tagIncludeMode** | **TagIncludeMode** | 태그 포함 모드: none(포함 안 함), timer_only(타이머 태그만), inherit_from_schedule(스케줄/Todo 태그 상속) | (optional) defaults to undefined|
| **timezone** | [**string**] | 타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 | (optional) defaults to undefined|


### Return type

**TimerRead**

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

