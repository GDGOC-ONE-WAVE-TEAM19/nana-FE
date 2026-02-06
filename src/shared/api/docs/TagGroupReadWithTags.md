# TagGroupReadWithTags

태그 그룹 조회 DTO (태그 포함)

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
**tags** | [**Array&lt;TagRead&gt;**](TagRead.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TagGroupReadWithTags } from './api';

const instance: TagGroupReadWithTags = {
    id,
    name,
    color,
    description,
    goal_ratios,
    is_todo_group,
    created_at,
    updated_at,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
