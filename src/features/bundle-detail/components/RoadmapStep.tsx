import { useState } from 'react'
import type { RoadmapStep as RoadmapStepType } from '../types'
import { categoryColors } from '../types'

interface RoadmapStepProps {
    step: RoadmapStepType
    defaultExpanded?: boolean
}

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg
        className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M14.77 12.79a.75.75 0 0 1-1.06-.02L10 8.832 6.29 12.77a.75.75 0 1 1-1.08-1.04l4.25-4.5a.75.75 0 0 1 1.08 0l4.25 4.5a.75.75 0 0 1-.02 1.06Z"
            clipRule="evenodd"
        />
    </svg>
)

export default function RoadmapStep({ step, defaultExpanded = false }: RoadmapStepProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {}
        step.todos.forEach((todo) => {
            initial[todo.id] = todo.isCompleted
        })
        return initial
    })

    const handleToggle = (todoId: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [todoId]: !prev[todoId],
        }))
    }

    return (
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Header - Clickable */}
            <div
                className={`px-6 py-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${isExpanded ? 'pb-4' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3">
                    <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg ${isExpanded ? 'bg-[#F3E5F5] text-[#6C5CE7]' : 'bg-gray-100 text-gray-500'
                            }`}
                    >
                        {step.order}
                    </span>
                    <h2 className={`font-bold ${isExpanded ? 'text-xl' : 'text-lg'} text-gray-900`}>
                        {step.title}
                    </h2>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <ChevronIcon isExpanded={isExpanded} />
                </button>
            </div>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="px-6 pb-8">
                    <ul className="space-y-6 pl-2 sm:pl-4 border-l-2 ml-3.5 border-gray-200">
                        {step.todos.map((todo) => {
                            const isChecked = checkedItems[todo.id]
                            const category = categoryColors[todo.category]

                            return (
                                <li key={todo.id} className="flex items-start gap-4 group relative">
                                    {/* Timeline dot */}
                                    <div
                                        className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-white ring-1 ring-gray-100 ${isChecked ? 'bg-indigo-100' : 'bg-gray-200'
                                            }`}
                                    />

                                    <label className="flex items-start gap-4 cursor-pointer w-full">
                                        {/* Custom Checkbox */}
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => handleToggle(todo.id)}
                                            className="mt-1 shrink-0 w-6 h-6 rounded border-2 border-gray-300 text-[#6C5CE7] focus:ring-[#6C5CE7] cursor-pointer"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <span
                                                className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold ${category.bg} ${category.text} w-fit rounded-md`}
                                            >
                                                {category.label}
                                            </span>
                                            <span className={`font-medium ${isChecked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                                                {todo.title}
                                            </span>
                                        </div>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}
