import { useState } from 'react'
import BundleHero from './BundleHero'
import BundleFilters from './BundleFilters'
import BundlePresetCard from './BundlePresetCard'
import BundlePagination from './BundlePagination'
import { usePresetList } from '../hooks/usePresets'

interface BundleContainerProps {
    company?: string
    jobTitle?: string
}

export default function BundleContainer({
    company = '네이버',
    jobTitle = '백엔드 개발'
}: BundleContainerProps) {
    const [prepPeriod, setPrepPeriod] = useState('6')
    const [difficulty, setDifficulty] = useState('medium')
    const [schoolTypes, setSchoolTypes] = useState<string[]>(['regional'])
    const [currentPage, setCurrentPage] = useState(1)

    // Fetch presets from API
    const { data: presets, isLoading, error } = usePresetList()

    const itemsPerPage = 6
    const totalPages = presets ? Math.ceil(presets.length / itemsPerPage) : 1
    const paginatedPresets = presets?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div className="bg-[#F8F9FD]">
            {/* Hero Section */}
            <BundleHero company={company} jobTitle={jobTitle} />

            {/* Main Layout */}
            <main className="flex-grow container mx-auto px-4 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar (Filters) */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <BundleFilters
                            prepPeriod={prepPeriod}
                            onPrepPeriodChange={setPrepPeriod}
                            difficulty={difficulty}
                            onDifficultyChange={setDifficulty}
                            schoolTypes={schoolTypes}
                            onSchoolTypesChange={setSchoolTypes}
                        />
                    </aside>

                    {/* Content Grid */}
                    <div className="flex-1">
                        {isLoading && (
                            <div className="flex items-center justify-center py-20">
                                <div className="text-gray-500">로드맵을 불러오는 중...</div>
                            </div>
                        )}

                        {error && (
                            <div className="flex items-center justify-center py-20">
                                <div className="text-red-500">로드맵을 불러오는데 실패했습니다.</div>
                            </div>
                        )}

                        {!isLoading && !error && paginatedPresets && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {paginatedPresets.map((preset) => (
                                        <BundlePresetCard
                                            key={preset.name}
                                            preset={preset}
                                        />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <BundlePagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setCurrentPage}
                                    />
                                )}
                            </>
                        )}

                        {!isLoading && !error && (!presets || presets.length === 0) && (
                            <div className="flex items-center justify-center py-20">
                                <div className="text-gray-500">등록된 로드맵이 없습니다.</div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
