import { useState } from 'react'
import TodoList from './TodoList'
import FilterSidebar from './FilterSidebar'
import { useTodoStats } from '../hooks/useTodos'

export default function MyPlanContainer() {
    const [selectedGroupId, setSelectedGroupId] = useState<string | undefined>(undefined)
    const { data: stats } = useTodoStats(selectedGroupId)

    return (
        <div className="min-h-screen bg-[#f7f8fa]">
            <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-[1100px]">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-extrabold text-gray-900 mb-2">My Plan</h1>
                    <p className="text-gray-500">나만의 취업 준비 로드맵을 관리하세요</p>

                    {/* Stats */}
                    {stats && (
                        <div className="flex gap-4 mt-4">
                            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                                📋 총 {stats.total_count}개 투두
                            </div>
                        </div>
                    )}
                </div>

                {/* Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <FilterSidebar
                            selectedGroupId={selectedGroupId}
                            onGroupChange={setSelectedGroupId}
                        />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <TodoList groupId={selectedGroupId} />
                    </div>
                </div>
            </main>
        </div>
    )
}
