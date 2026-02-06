# TagGroupUpdate

태그 그룹 업데이트 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**color** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**goal_ratios** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**is_todo_group** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { TagGroupUpdate } from './api';

const instance: TagGroupUpdate = {
    name,
    color,
    description,
    goal_ratios,
    is_todo_group,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
