# TodosApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTodoV1TodosPost**](#createtodov1todospost) | **POST** /v1/todos | Create Todo|
|[**deleteTodoV1TodosTodoIdDelete**](#deletetodov1todostodoiddelete) | **DELETE** /v1/todos/{todo_id} | Delete Todo|
|[**getPresetV1TodosPresetsPresetNameGet**](#getpresetv1todospresetspresetnameget) | **GET** /v1/todos/presets/{preset_name} | Get Preset|
|[**getTodoActiveTimerV1TodosTodoIdTimersActiveGet**](#gettodoactivetimerv1todostodoidtimersactiveget) | **GET** /v1/todos/{todo_id}/timers/active | Get Todo Active Timer|
|[**getTodoStatsV1TodosStatsGet**](#gettodostatsv1todosstatsget) | **GET** /v1/todos/stats | Get Todo Stats|
|[**getTodoTimersV1TodosTodoIdTimersGet**](#gettodotimersv1todostodoidtimersget) | **GET** /v1/todos/{todo_id}/timers | Get Todo Timers|
|[**initializeFromPresetV1TodosInitializePresetNamePost**](#initializefrompresetv1todosinitializepresetnamepost) | **POST** /v1/todos/initialize/{preset_name} | Initialize From Preset|
|[**listPresetsV1TodosPresetsGet**](#listpresetsv1todospresetsget) | **GET** /v1/todos/presets | List Presets|
|[**readTodoV1TodosTodoIdGet**](#readtodov1todostodoidget) | **GET** /v1/todos/{todo_id} | Read Todo|
|[**readTodosV1TodosGet**](#readtodosv1todosget) | **GET** /v1/todos | Read Todos|
|[**updateTodoV1TodosTodoIdPatch**](#updatetodov1todostodoidpatch) | **PATCH** /v1/todos/{todo_id} | Update Todo|

# **createTodoV1TodosPost**
> TodoRead createTodoV1TodosPost(todoCreate)

새 Todo 생성  Todo는 독립적인 엔티티입니다. deadline이 있으면 별도의 Schedule이 자동으로 생성됩니다.

### Example

```typescript
import {
    TodosApi,
    Configuration,
    TodoCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let todoCreate: TodoCreate; //

const { status, data } = await apiInstance.createTodoV1TodosPost(
    todoCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoCreate** | **TodoCreate**|  | |


### Return type

**TodoRead**

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

# **deleteTodoV1TodosTodoIdDelete**
> any deleteTodoV1TodosTodoIdDelete()

Todo 삭제

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let todoId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTodoV1TodosTodoIdDelete(
    todoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoId** | [**string**] |  | defaults to undefined|


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

# **getPresetV1TodosPresetsPresetNameGet**
> Preset getPresetV1TodosPresetsPresetNameGet()

프리셋 상세 조회  프리셋의 TagGroup, Tag, Todo 구조를 미리 확인할 수 있습니다.

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let presetName: string; // (default to undefined)

const { status, data } = await apiInstance.getPresetV1TodosPresetsPresetNameGet(
    presetName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **presetName** | [**string**] |  | defaults to undefined|


### Return type

**Preset**

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

# **getTodoActiveTimerV1TodosTodoIdTimersActiveGet**
> TimerRead getTodoActiveTimerV1TodosTodoIdTimersActiveGet()

Todo의 현재 활성 타이머 조회 (RUNNING 또는 PAUSED, 공유된 Todo 포함)  활성 타이머가 없으면 404를 반환합니다. Schedule의 /schedules/{schedule_id}/timers/active 엔드포인트와 동일한 패턴입니다.

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let todoId: string; // (default to undefined)
let includeTodo: boolean; //Todo 정보 포함 여부 (기본값: false) (optional) (default to false)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getTodoActiveTimerV1TodosTodoIdTimersActiveGet(
    todoId,
    includeTodo,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoId** | [**string**] |  | defaults to undefined|
| **includeTodo** | [**boolean**] | Todo 정보 포함 여부 (기본값: false) | (optional) defaults to false|
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

# **getTodoStatsV1TodosStatsGet**
> TodoStats getTodoStatsV1TodosStatsGet()

Todo 통계 조회  그룹별 태그 통계를 반환합니다. group_id가 지정되면 해당 그룹의 태그만 집계합니다.

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let groupId: string; //필터링할 태그 그룹 ID (optional) (default to undefined)

const { status, data } = await apiInstance.getTodoStatsV1TodosStatsGet(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | 필터링할 태그 그룹 ID | (optional) defaults to undefined|


### Return type

**TodoStats**

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

# **getTodoTimersV1TodosTodoIdTimersGet**
> Array<TimerRead> getTodoTimersV1TodosTodoIdTimersGet()

Todo의 모든 타이머 조회 (공유된 Todo 포함)  Schedule의 /schedules/{schedule_id}/timers 엔드포인트와 동일한 패턴입니다.

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let todoId: string; // (default to undefined)
let includeTodo: boolean; //Todo 정보 포함 여부 (기본값: false) (optional) (default to false)
let timezone: string; //타임존 (예: UTC, +09:00, Asia/Seoul). 지정하지 않으면 UTC로 반환 (optional) (default to undefined)

const { status, data } = await apiInstance.getTodoTimersV1TodosTodoIdTimersGet(
    todoId,
    includeTodo,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoId** | [**string**] |  | defaults to undefined|
| **includeTodo** | [**boolean**] | Todo 정보 포함 여부 (기본값: false) | (optional) defaults to false|
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

# **initializeFromPresetV1TodosInitializePresetNamePost**
> PresetInitializeResult initializeFromPresetV1TodosInitializePresetNamePost()

프리셋으로 Todo 초기화  지정한 프리셋을 사용하여 TagGroup, Tag, Todo를 일괄 생성합니다.  - TagGroup 1개 생성 - 프리셋에 정의된 Tag들 생성 - 프리셋에 정의된 Todo들 생성 (계층 구조 지원)

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let presetName: string; // (default to undefined)

const { status, data } = await apiInstance.initializeFromPresetV1TodosInitializePresetNamePost(
    presetName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **presetName** | [**string**] |  | defaults to undefined|


### Return type

**PresetInitializeResult**

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

# **listPresetsV1TodosPresetsGet**
> Array<PresetInfo> listPresetsV1TodosPresetsGet()

사용 가능한 프리셋 목록 조회  프리셋은 TagGroup, Tag, Todo를 일괄 생성하기 위한 템플릿입니다.

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

const { status, data } = await apiInstance.listPresetsV1TodosPresetsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PresetInfo>**

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

# **readTodoV1TodosTodoIdGet**
> TodoRead readTodoV1TodosTodoIdGet()

ID로 Todo 조회 (공유된 Todo 포함)  본인 소유 Todo 또는 공유 접근 권한이 있는 Todo를 조회합니다. 접근 권한이 없으면 403 Forbidden을 반환합니다.

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let todoId: string; // (default to undefined)

const { status, data } = await apiInstance.readTodoV1TodosTodoIdGet(
    todoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoId** | [**string**] |  | defaults to undefined|


### Return type

**TodoRead**

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

# **readTodosV1TodosGet**
> Array<TodoRead> readTodosV1TodosGet()

Todo 목록 조회 (태그/그룹 필터링 지원)  조회 범위 (scope): - mine: 내 Todo만 (기본값) - shared: 공유된 타인의 Todo만 - all: 내 Todo + 공유된 Todo  그룹 필터링: - group_ids: 해당 그룹에 속한 Todo 반환   - tag_group_id로 직접 연결된 Todo   - OR 해당 그룹의 태그를 가진 Todo  태그 필터링: - tag_ids: AND 방식 (모든 지정 태그를 포함한 Todo만 반환) - 태그 필터 시 조상 노드도 포함 (orphan 방지)  응답의 include_reason 필드: - MATCH: 필터 조건에 직접 매칭된 Todo - ANCESTOR: 매칭된 Todo의 조상이라 포함된 Todo  둘 다 지정 시: 그룹 필터링 후 태그 필터링 적용

### Example

```typescript
import {
    TodosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let scope: ResourceScope; //조회 범위: mine(내 Todo만), shared(공유된 Todo만), all(모두) (optional) (default to undefined)
let tagIds: Array<string>; //태그 ID 리스트 (AND 방식: 모든 지정 태그를 포함한 Todo만 반환) (optional) (default to undefined)
let groupIds: Array<string>; //태그 그룹 ID 리스트 (해당 그룹에 속한 Todo 반환 - 직접 연결 또는 태그 기반) (optional) (default to undefined)

const { status, data } = await apiInstance.readTodosV1TodosGet(
    scope,
    tagIds,
    groupIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scope** | **ResourceScope** | 조회 범위: mine(내 Todo만), shared(공유된 Todo만), all(모두) | (optional) defaults to undefined|
| **tagIds** | **Array&lt;string&gt;** | 태그 ID 리스트 (AND 방식: 모든 지정 태그를 포함한 Todo만 반환) | (optional) defaults to undefined|
| **groupIds** | **Array&lt;string&gt;** | 태그 그룹 ID 리스트 (해당 그룹에 속한 Todo 반환 - 직접 연결 또는 태그 기반) | (optional) defaults to undefined|


### Return type

**Array<TodoRead>**

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

# **updateTodoV1TodosTodoIdPatch**
> TodoRead updateTodoV1TodosTodoIdPatch(todoUpdate)

Todo 업데이트  title, description, tag_ids, deadline, parent_id, status를 업데이트할 수 있습니다.  deadline 변경 시: - deadline 추가: 새 Schedule 생성 - deadline 변경: 기존 Schedule 업데이트 - deadline 제거: 기존 Schedule 삭제

### Example

```typescript
import {
    TodosApi,
    Configuration,
    TodoUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new TodosApi(configuration);

let todoId: string; // (default to undefined)
let todoUpdate: TodoUpdate; //

const { status, data } = await apiInstance.updateTodoV1TodosTodoIdPatch(
    todoId,
    todoUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoUpdate** | **TodoUpdate**|  | |
| **todoId** | [**string**] |  | defaults to undefined|


### Return type

**TodoRead**

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

