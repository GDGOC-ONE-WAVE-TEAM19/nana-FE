interface FilterOption {
    value: string
    label: string
}

interface BundleFiltersProps {
    prepPeriod: string
    onPrepPeriodChange: (value: string) => void
    difficulty: string
    onDifficultyChange: (value: string) => void
    schoolTypes: string[]
    onSchoolTypesChange: (values: string[]) => void
}

const prepPeriodOptions: FilterOption[] = [
    { value: '6', label: '6개월 준비' },
    { value: '7', label: '7개월 준비' },
    { value: '8', label: '8개월 완료' },
]

const difficultyOptions: FilterOption[] = [
    { value: 'easy', label: '쉬움' },
    { value: 'medium', label: '보통' },
    { value: 'hard', label: '어려움' },
]

const schoolTypeOptions: FilterOption[] = [
    { value: 'regional', label: '지방거점국립대' },
    { value: 'seoul', label: '서울 4년제' },
    { value: 'metropolitan', label: '수도권 4년제' },
]

export default function BundleFilters({
    prepPeriod,
    onPrepPeriodChange,
    difficulty,
    onDifficultyChange,
    schoolTypes,
    onSchoolTypesChange,
}: BundleFiltersProps) {
    const handleSchoolTypeToggle = (value: string) => {
        if (schoolTypes.includes(value)) {
            onSchoolTypesChange(schoolTypes.filter((t) => t !== value))
        } else {
            onSchoolTypesChange([...schoolTypes, value])
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sticky top-6">
            <h3 className="font-bold text-lg mb-4">필터</h3>

            {/* Filter Group: Prep Period */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">준비 기간</h4>
                <div className="space-y-2">
                    {prepPeriodOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="prep_period"
                                value={option.value}
                                checked={prepPeriod === option.value}
                                onChange={(e) => onPrepPeriodChange(e.target.value)}
                                className="w-4 h-4 text-[#6C5CE7] focus:ring-[#6C5CE7] border-gray-300"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-[#6C5CE7] transition-colors">
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: Difficulty */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">난이도</h4>
                <div className="space-y-2">
                    {difficultyOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="difficulty"
                                value={option.value}
                                checked={difficulty === option.value}
                                onChange={(e) => onDifficultyChange(e.target.value)}
                                className="w-4 h-4 text-[#6C5CE7] focus:ring-[#6C5CE7] border-gray-300"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-[#6C5CE7] transition-colors">
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: School Type */}
            <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">학교 구분</h4>
                <div className="space-y-2">
                    {schoolTypeOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                value={option.value}
                                checked={schoolTypes.includes(option.value)}
                                onChange={() => handleSchoolTypeToggle(option.value)}
                                className="w-4 h-4 text-[#6C5CE7] rounded focus:ring-[#6C5CE7] border-gray-300"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-[#6C5CE7] transition-colors">
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}
