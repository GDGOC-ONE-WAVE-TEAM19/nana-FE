import TodoItem from './TodoItem'
import { useTodos, useUpdateTodo } from '../hooks/useTodos'
import { TodoStatus } from '../../../shared/api'

interface TodoListProps {
    groupId?: string
}

export default function TodoList({ groupId }: TodoListProps) {
    const { data: todos, isLoading, error } = useTodos(groupId)
    const { mutate: updateTodo } = useUpdateTodo()

    const handleToggle = (todoId: string, currentStatus: string) => {
        const newStatus = currentStatus === TodoStatus.Done
            ? TodoStatus.Unscheduled
            : TodoStatus.Done
        updateTodo({ id: todoId, update: { status: newStatus } })
    }

    if (isLoading) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-center text-gray-500 py-8">투두를 불러오는 중...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-center text-red-500 py-8">투두를 불러오는데 실패했습니다.</div>
            </div>
        )
    }

    if (!todos || todos.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-center py-8">
                    <p className="text-gray-500 mb-2">등록된 투두가 없습니다.</p>
                    <p className="text-sm text-gray-400">
                        로드맵에서 "내 플랜으로 가져오기"를 눌러 시작해보세요!
                    </p>
                </div>
            </div>
        )
    }

    // Group todos by parent (steps)
    const rootTodos = todos.filter(t => !t.parent_id)
    const childTodos = todos.filter(t => t.parent_id)

    return (
        <div className="space-y-4">
            {rootTodos.map((parentTodo) => {
                const children = childTodos.filter(c => c.parent_id === parentTodo.id)
                const hasChildren = children.length > 0

                return (
                    <div
                        key={parentTodo.id}
                        className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden"
                    >
                        <div className="px-6 py-5">
                            {/* Step Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3E5F5] text-[#6C5CE7] font-bold text-lg">
                                    {rootTodos.indexOf(parentTodo) + 1}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900">{parentTodo.title}</h3>
                            </div>

                            {/* Todo Items */}
                            {hasChildren ? (
                                <ul className="space-y-3 pl-4 border-l-2 ml-3.5 border-gray-200">
                                    {children.map((todo) => (
                                        <TodoItem
                                            key={todo.id}
                                            todo={todo}
                                            onToggle={handleToggle}
                                        />
                                    ))}
                                </ul>
                            ) : (
                                <TodoItem
                                    todo={parentTodo}
                                    onToggle={handleToggle}
                                />
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
