import { useMemo } from 'react'
import { useTodoStore } from '../stores/todoStore'

export function useTodos() {
  const { todos, filter } = useTodoStore()

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter.status !== 'all' && todo.status !== filter.status) return false
      if (filter.category !== 'all' && todo.category !== filter.category) return false
      return true
    })
  }, [todos, filter])

  const stats = useMemo(() => {
    const total = todos.length
    const done = todos.filter((t) => t.status === 'done').length
    const inProgress = todos.filter((t) => t.status === 'in_progress').length
    const pending = todos.filter((t) => t.status === 'pending').length
    return { total, done, inProgress, pending, progress: total > 0 ? Math.round((done / total) * 100) : 0 }
  }, [todos])

  return { todos: filteredTodos, stats }
}
