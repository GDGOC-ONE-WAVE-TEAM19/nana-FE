import type { Todo } from '../types'
import { useTodoStore } from '../stores/todoStore'
import Card from '../../../../shared/components/ui/Card'
import Badge from '../../../../shared/components/ui/Badge'

interface TodoItemProps {
  todo: Todo
}

const categoryColors = {
  cote: 'blue' as const,
  project: 'green' as const,
  cs: 'purple' as const,
  resume: 'pink' as const,
  interview: 'red' as const,
  etc: 'gray' as const,
}

export default function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useTodoStore((s) => s.toggleTodo)

  return (
    <Card padding="sm" className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={todo.status === 'done'}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${todo.status === 'done' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {todo.title}
        </p>
        <p className="text-xs text-gray-500 truncate">{todo.description}</p>
      </div>
      <Badge label={todo.category} color={categoryColors[todo.category]} />
    </Card>
  )
}
