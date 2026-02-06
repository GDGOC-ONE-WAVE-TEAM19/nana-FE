/**
 * API hooks for My Plan feature
 * Uses TodosApi for todo management
 */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { todosApi } from '../../../shared/api/apiClient'
import type { TodoRead, TodoCreate, TodoUpdate, ResourceScope } from '../../../shared/api'

/**
 * Fetch all todos for the current user
 */
export function useTodos(groupId?: string) {
    return useQuery<TodoRead[]>({
        queryKey: ['todos', groupId],
        queryFn: async () => {
            const response = await todosApi.readTodosV1TodosGet(
                'mine' as ResourceScope,
                null,
                groupId ? [groupId] : null
            )
            return response.data
        },
    })
}

/**
 * Fetch single todo by ID
 */
export function useTodo(todoId: string | undefined) {
    return useQuery<TodoRead>({
        queryKey: ['todo', todoId],
        queryFn: async () => {
            if (!todoId) throw new Error('Todo ID required')
            const response = await todosApi.readTodoV1TodosTodoIdGet(todoId)
            return response.data
        },
        enabled: !!todoId,
    })
}

/**
 * Create a new todo
 */
export function useCreateTodo() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (todo: TodoCreate) => {
            const response = await todosApi.createTodoV1TodosPost(todo)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}

/**
 * Update a todo (status, title, etc.)
 */
export function useUpdateTodo() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ id, update }: { id: string; update: TodoUpdate }) => {
            const response = await todosApi.updateTodoV1TodosTodoIdPatch(id, update)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}

/**
 * Delete a todo
 */
export function useDeleteTodo() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (todoId: string) => {
            await todosApi.deleteTodoV1TodosTodoIdDelete(todoId)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}

/**
 * Get todo statistics
 */
export function useTodoStats(groupId?: string) {
    return useQuery({
        queryKey: ['todoStats', groupId],
        queryFn: async () => {
            const response = await todosApi.getTodoStatsV1TodosStatsGet(groupId)
            return response.data
        },
    })
}
