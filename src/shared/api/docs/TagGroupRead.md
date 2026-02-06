# TagGroupRead

태그 그룹 조회 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**color** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**goal_ratios** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**is_todo_group** | **boolean** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]

## Example

```typescript
import { TagGroupRead } from './api';

const instance: TagGroupRead = {
    id,
    name,
    color,
    description,
    goal_ratios,
    is_todo_group,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
