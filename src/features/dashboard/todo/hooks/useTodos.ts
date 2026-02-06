/**
 * Dashboard Todo hooks - Uses API with tag-based grouping
 * Only shows child todos (excludes parent todos that have children)
 */
import { useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { todosApi } from '../../../../shared/api/apiClient'
import type { TodoRead, ResourceScope } from '../../../../shared/api'
import { TodoStatus } from '../../../../shared/api'

// Dashboard todo type - uses tag as group name
export interface DashboardTodo {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'done'
  tagName: string // Tag name (e.g., "CS", "코테", "프로젝트")
  createdAt: string
  parentId?: string
}

/**
 * Map API status to dashboard status
 */
function mapStatus(status: string): 'pending' | 'in_progress' | 'done' {
  if (status === TodoStatus.Done) return 'done'
  if (status === TodoStatus.Scheduled) return 'in_progress'
  return 'pending'
}

/**
 * Fetch todos and organize by tags
 * Only returns child todos (those with a parent_id)
 */
export function useTodos() {
  const { data: apiTodos, isLoading, error } = useQuery<TodoRead[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await todosApi.readTodosV1TodosGet('mine' as ResourceScope)
      return response.data
    },
  })

  // Filter and organize todos - only show children (leaf nodes), sorted by parent order
  const { todos, tags, stats } = useMemo(() => {
    if (!apiTodos) return { todos: [], tags: [], stats: { total: 0, done: 0, progress: 0 } }

    // Get all parent IDs (todos that have children)
    const parentIds = new Set(apiTodos.filter(t => t.parent_id).map(t => t.parent_id))

    // Get root level parents (no parent_id) in order - use array index as order
    const rootParents = apiTodos.filter(t => !t.parent_id && parentIds.has(t.id))

    // Create parent order map for sorting (using original API array order)
    const parentOrderMap = new Map<string, number>()
    rootParents.forEach((parent, index) => {
      parentOrderMap.set(parent.id, index)
    })

    // Create index map for all todos (to preserve API order)
    const todoIndexMap = new Map<string, number>()
    apiTodos.forEach((todo, index) => {
      todoIndexMap.set(todo.id, index)
    })

    // Only include todos that have a parent_id (they are children)
    // AND are not themselves parents (don't have children)
    const childTodos = apiTodos.filter(todo =>
      todo.parent_id && // Must have a parent (is a child)
      !parentIds.has(todo.id) // Must not have children of its own (is a leaf)
    )

    // Sort children by their parent's order, then by their own API index (reversed)
    childTodos.sort((a, b) => {
      const aParentOrder = parentOrderMap.get(a.parent_id!) ?? 999
      const bParentOrder = parentOrderMap.get(b.parent_id!) ?? 999
      if (aParentOrder !== bParentOrder) {
        return bParentOrder - aParentOrder // Reversed
      }
      // Same parent - use original API order (reversed)
      const aIndex = todoIndexMap.get(a.id) ?? 999
      const bIndex = todoIndexMap.get(b.id) ?? 999
      return bIndex - aIndex // Reversed
    })

    // Map child todos with their tag names
    const mappedTodos: DashboardTodo[] = childTodos.map(todo => {
      // Get first tag name, or "기타" if no tags
      const firstTag = todo.tags && todo.tags.length > 0
        ? todo.tags[0].name
        : '기타'

      return {
        id: todo.id,
        title: todo.title,
        description: todo.description || '',
        status: mapStatus(todo.status),
        tagName: firstTag,
        createdAt: todo.created_at || new Date().toISOString(),
        parentId: todo.parent_id || undefined,
      }
    })

    // Get unique tag names (preserving order of appearance)
    const uniqueTags = [...new Set(mappedTodos.map(t => t.tagName))]

    // Calculate stats
    const total = mappedTodos.length
    const done = mappedTodos.filter(t => t.status === 'done').length
    const progress = total > 0 ? Math.round((done / total) * 100) : 0

    return {
      todos: mappedTodos,
      tags: uniqueTags,
      stats: { total, done, progress }
    }
  }, [apiTodos])

  return { todos, tags, stats, isLoading, error }
}

/**
 * Toggle todo status via API
 */
export function useToggleTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, currentStatus }: { id: string; currentStatus: string }) => {
      const newStatus = currentStatus === 'done' ? TodoStatus.Unscheduled : TodoStatus.Done
      const response = await todosApi.updateTodoV1TodosTodoIdPatch(id, { status: newStatus })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

/**
 * Delete a single todo via API
 */
export function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todoId: string) => {
      const response = await todosApi.deleteTodoV1TodosTodoIdDelete(todoId)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

/**
 * Delete all todos via API (clears the entire list)
 */
export function useDeleteAllTodos() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todoIds: string[]) => {
      // Delete all todos one by one
      await Promise.all(todoIds.map(id =>
        todosApi.deleteTodoV1TodosTodoIdDelete(id)
      ))
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
