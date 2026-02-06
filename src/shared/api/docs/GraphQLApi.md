# GraphQLApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleHttpGetV1GraphqlGet**](#handlehttpgetv1graphqlget) | **GET** /v1/graphql | Handle Http Get|
|[**handleHttpPostV1GraphqlPost**](#handlehttppostv1graphqlpost) | **POST** /v1/graphql | Handle Http Post|

# **handleHttpGetV1GraphqlGet**
> any handleHttpGetV1GraphqlGet()


### Example

```typescript
import {
    GraphQLApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GraphQLApi(configuration);

const { status, data } = await apiInstance.handleHttpGetV1GraphqlGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The GraphiQL integrated development environment. |  -  |
|**404** | Not found if GraphiQL or query via GET are not enabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **handleHttpPostV1GraphqlPost**
> any handleHttpPostV1GraphqlPost()


### Example

```typescript
import {
    GraphQLApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GraphQLApi(configuration);

const { status, data } = await apiInstance.handleHttpPostV1GraphqlPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

