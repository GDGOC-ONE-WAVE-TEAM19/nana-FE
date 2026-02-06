import type { DashboardTodo } from '../hooks/useTodos'
import { useToggleTodo } from '../hooks/useTodos'
import Card from '../../../../shared/components/ui/Card'
import Badge from '../../../../shared/components/ui/Badge'

interface TodoItemProps {
  todo: DashboardTodo
}

const tagColors: Record<string, 'blue' | 'green' | 'purple' | 'pink' | 'red' | 'gray'> = {
  코테: 'blue',
  프로젝트: 'green',
  CS: 'purple',
  이력서: 'pink',
  면접: 'red',
}

export default function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useToggleTodo()

  return (
    <Card padding="sm" className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={todo.status === 'done'}
        onChange={() => toggleTodo.mutate({ id: todo.id, currentStatus: todo.status })}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${todo.status === 'done' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {todo.title}
        </p>
        <p className="text-xs text-gray-500 truncate">{todo.description}</p>
      </div>
      <Badge label={todo.tagName} color={tagColors[todo.tagName] ?? 'gray'} />
    </Card>
  )
}
