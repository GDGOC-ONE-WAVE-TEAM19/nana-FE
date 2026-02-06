import type { TodoRead } from '../../../shared/api'
import { TodoStatus } from '../../../shared/api'

interface TodoItemProps {
    todo: TodoRead
    onToggle: (id: string, currentStatus: string) => void
}

// Category badge styling based on tag colors
const getCategoryStyle = (todo: TodoRead) => {
    const firstTag = todo.tags?.[0]
    if (firstTag) {
        return {
            bg: `bg-opacity-20`,
            style: { backgroundColor: `${firstTag.color}20` },
            text: firstTag.color,
            label: firstTag.name,
        }
    }
    return { bg: 'bg-gray-100', text: 'text-gray-600', label: '기타', style: {} }
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
    const isDone = todo.status === TodoStatus.Done
    const category = getCategoryStyle(todo)

    return (
        <li className="flex items-start gap-4 group relative py-2">
            <label className="flex items-start gap-4 cursor-pointer w-full">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => onToggle(todo.id, todo.status)}
                    className="custom-checkbox mt-1 shrink-0"
                />
                <div className="flex flex-col gap-1 flex-1">
                    <span
                        className="inline-flex items-center px-2 py-0.5 text-xs font-semibold w-fit rounded-md"
                        style={{ backgroundColor: category.style.backgroundColor, color: category.text }}
                    >
                        {category.label}
                    </span>
                    <span className={`font-medium ${isDone ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                        {todo.title}
                    </span>
                    {todo.description && (
                        <span className="text-sm text-gray-500">{todo.description}</span>
                    )}
                </div>
            </label>
        </li>
    )
}
