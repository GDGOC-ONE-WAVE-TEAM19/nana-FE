import { useMemo } from 'react'
import { useTodoStore } from '../../todo/stores/todoStore'

export function useDashboard() {
  const todos = useTodoStore((s) => s.todos)

  return useMemo(() => {
    const total = todos.length
    const done = todos.filter((t) => t.status === 'done').length
    const inProgress = todos.filter((t) => t.status === 'in_progress').length
    const pending = todos.filter((t) => t.status === 'pending').length
    const progress = total > 0 ? Math.round((done / total) * 100) : 0

    const categoryBreakdown = todos.reduce<Record<string, number>>((acc, todo) => {
      acc[todo.category] = (acc[todo.category] || 0) + 1
      return acc
    }, {})

    return { total, done, inProgress, pending, progress, categoryBreakdown }
  }, [todos])
}
