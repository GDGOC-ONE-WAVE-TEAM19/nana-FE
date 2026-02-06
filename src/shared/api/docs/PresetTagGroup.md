# PresetTagGroup

프리셋 태그 그룹 정의

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**color** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**goal_ratios** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**is_todo_group** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { PresetTagGroup } from './api';

const instance: PresetTagGroup = {
    name,
    color,
    description,
    goal_ratios,
    is_todo_group,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
