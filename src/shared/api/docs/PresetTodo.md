# PresetTodo

프리셋 Todo 정의 (계층 구조 지원)  tag_names: 이 Todo에 연결할 태그 이름 리스트 children: 자식 Todo 리스트 (재귀적 구조)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tag_names** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**children** | [**Array&lt;PresetTodo&gt;**](PresetTodo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PresetTodo } from './api';

const instance: PresetTodo = {
    title,
    description,
    tag_names,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
