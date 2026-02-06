# TagsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTagGroupV1TagsGroupsPost**](#createtaggroupv1tagsgroupspost) | **POST** /v1/tags/groups | Create Tag Group|
|[**createTagV1TagsPost**](#createtagv1tagspost) | **POST** /v1/tags | Create Tag|
|[**deleteTagGroupV1TagsGroupsGroupIdDelete**](#deletetaggroupv1tagsgroupsgroupiddelete) | **DELETE** /v1/tags/groups/{group_id} | Delete Tag Group|
|[**deleteTagV1TagsTagIdDelete**](#deletetagv1tagstagiddelete) | **DELETE** /v1/tags/{tag_id} | Delete Tag|
|[**readTagGroupV1TagsGroupsGroupIdGet**](#readtaggroupv1tagsgroupsgroupidget) | **GET** /v1/tags/groups/{group_id} | Read Tag Group|
|[**readTagGroupsV1TagsGroupsGet**](#readtaggroupsv1tagsgroupsget) | **GET** /v1/tags/groups | Read Tag Groups|
|[**readTagV1TagsTagIdGet**](#readtagv1tagstagidget) | **GET** /v1/tags/{tag_id} | Read Tag|
|[**readTagsV1TagsGet**](#readtagsv1tagsget) | **GET** /v1/tags | Read Tags|
|[**updateTagGroupV1TagsGroupsGroupIdPatch**](#updatetaggroupv1tagsgroupsgroupidpatch) | **PATCH** /v1/tags/groups/{group_id} | Update Tag Group|
|[**updateTagV1TagsTagIdPatch**](#updatetagv1tagstagidpatch) | **PATCH** /v1/tags/{tag_id} | Update Tag|

# **createTagGroupV1TagsGroupsPost**
> TagGroupRead createTagGroupV1TagsGroupsPost(tagGroupCreate)

태그 그룹 생성

### Example

```typescript
import {
    TagsApi,
    Configuration,
    TagGroupCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagGroupCreate: TagGroupCreate; //

const { status, data } = await apiInstance.createTagGroupV1TagsGroupsPost(
    tagGroupCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagGroupCreate** | **TagGroupCreate**|  | |


### Return type

**TagGroupRead**

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

# **createTagV1TagsPost**
> TagRead createTagV1TagsPost(tagCreate)

태그 생성

### Example

```typescript
import {
    TagsApi,
    Configuration,
    TagCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagCreate: TagCreate; //

const { status, data } = await apiInstance.createTagV1TagsPost(
    tagCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagCreate** | **TagCreate**|  | |


### Return type

**TagRead**

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

# **deleteTagGroupV1TagsGroupsGroupIdDelete**
> any deleteTagGroupV1TagsGroupsGroupIdDelete()

태그 그룹 삭제 (CASCADE로 태그도 삭제)

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTagGroupV1TagsGroupsGroupIdDelete(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


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

# **deleteTagV1TagsTagIdDelete**
> any deleteTagV1TagsTagIdDelete()

태그 삭제

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTagV1TagsTagIdDelete(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**string**] |  | defaults to undefined|


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

# **readTagGroupV1TagsGroupsGroupIdGet**
> TagGroupReadWithTags readTagGroupV1TagsGroupsGroupIdGet()

태그 그룹 조회 (태그 포함)

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.readTagGroupV1TagsGroupsGroupIdGet(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**TagGroupReadWithTags**

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

# **readTagGroupsV1TagsGroupsGet**
> Array<TagGroupReadWithTags> readTagGroupsV1TagsGroupsGet()

모든 태그 그룹 조회 (태그 포함)

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

const { status, data } = await apiInstance.readTagGroupsV1TagsGroupsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TagGroupReadWithTags>**

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

# **readTagV1TagsTagIdGet**
> TagRead readTagV1TagsTagIdGet()

태그 조회

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)

const { status, data } = await apiInstance.readTagV1TagsTagIdGet(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**string**] |  | defaults to undefined|


### Return type

**TagRead**

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

# **readTagsV1TagsGet**
> Array<TagRead> readTagsV1TagsGet()

모든 태그 조회

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

const { status, data } = await apiInstance.readTagsV1TagsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TagRead>**

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

# **updateTagGroupV1TagsGroupsGroupIdPatch**
> TagGroupRead updateTagGroupV1TagsGroupsGroupIdPatch(tagGroupUpdate)

태그 그룹 업데이트

### Example

```typescript
import {
    TagsApi,
    Configuration,
    TagGroupUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let groupId: string; // (default to undefined)
let tagGroupUpdate: TagGroupUpdate; //

const { status, data } = await apiInstance.updateTagGroupV1TagsGroupsGroupIdPatch(
    groupId,
    tagGroupUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagGroupUpdate** | **TagGroupUpdate**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**TagGroupRead**

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

# **updateTagV1TagsTagIdPatch**
> TagRead updateTagV1TagsTagIdPatch(tagUpdate)

태그 업데이트

### Example

```typescript
import {
    TagsApi,
    Configuration,
    TagUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)
let tagUpdate: TagUpdate; //

const { status, data } = await apiInstance.updateTagV1TagsTagIdPatch(
    tagId,
    tagUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagUpdate** | **TagUpdate**|  | |
| **tagId** | [**string**] |  | defaults to undefined|


### Return type

**TagRead**

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

