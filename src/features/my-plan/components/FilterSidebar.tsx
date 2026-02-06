// FilterSidebar - simplified version without tag groups
// Tag group filtering can be added when backend API is ready

interface FilterSidebarProps {
    selectedGroupId: string | undefined
    onGroupChange: (groupId: string | undefined) => void
}

export default function FilterSidebar({ selectedGroupId, onGroupChange }: FilterSidebarProps) {
    // Simplified version - just shows "all" filter
    // When TagsApi is ready, we can add group filtering
    return (
        <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4">필터</h3>
            <div className="space-y-2">
                <button
                    onClick={() => onGroupChange(undefined)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${!selectedGroupId
                            ? 'bg-[#6C5CE7] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                >
                    전체 보기
                </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
                태그 그룹 필터는 추후 추가 예정입니다.
            </p>
        </div>
    )
}
