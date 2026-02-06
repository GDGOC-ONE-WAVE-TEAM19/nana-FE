# HolidaysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getHolidaysV1HolidaysGet**](#getholidaysv1holidaysget) | **GET** /v1/holidays | Get Holidays|

# **getHolidaysV1HolidaysGet**
> Array<HolidayItem> getHolidaysV1HolidaysGet()

공휴일 조회  - year만 지정: 해당 연도 조회 - start_year/end_year 지정: 범위 조회 (end_year 없으면 start_year로 대체) - 미지정: 현재 연도 조회 - auto_sync=False (기본값): DB에 있는 데이터만 반환 - auto_sync=True: 데이터가 없으면 자동으로 동기화 수행 후 결과 반환 - 422 에러: 해당 연도의 공휴일 데이터가 준비되지 않은 경우 (2028년 이후 등)

### Example

```typescript
import {
    HolidaysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let year: number; //조회 연도 (YYYY) (optional) (default to undefined)
let startYear: number; //시작 연도 (YYYY) (optional) (default to undefined)
let endYear: number; //종료 연도 (YYYY) (optional) (default to undefined)
let autoSync: boolean; //데이터가 없을 경우 자동으로 동기화 실행 (optional) (default to false)

const { status, data } = await apiInstance.getHolidaysV1HolidaysGet(
    year,
    startYear,
    endYear,
    autoSync
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **year** | [**number**] | 조회 연도 (YYYY) | (optional) defaults to undefined|
| **startYear** | [**number**] | 시작 연도 (YYYY) | (optional) defaults to undefined|
| **endYear** | [**number**] | 종료 연도 (YYYY) | (optional) defaults to undefined|
| **autoSync** | [**boolean**] | 데이터가 없을 경우 자동으로 동기화 실행 | (optional) defaults to false|


### Return type

**Array<HolidayItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | 해당 연도의 공휴일 데이터가 아직 준비되지 않음 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

