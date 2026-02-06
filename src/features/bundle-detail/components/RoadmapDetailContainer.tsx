import { useParams } from 'react-router-dom'
import RoadmapStep from './RoadmapStep'
import RoadmapCTA from './RoadmapCTA'
import { useRoadmapDetail, useCopyRoadmap } from '../hooks/useRoadmapDetail'

export default function RoadmapDetailContainer() {
    const { authorId: presetName } = useParams<{ authorId: string }>()

    // Fetch preset data from API (authorId = preset name)
    const { data: roadmap, isLoading, error } = useRoadmapDetail(presetName)
    const { copyRoadmap, isPending: isCopying } = useCopyRoadmap()

    const handleCopyRoadmap = () => {
        if (presetName) {
            copyRoadmap(presetName)
        }
    }

    // Loading state
    if (isLoading) {
        return (
            <div className="bg-[#f7f8fa] min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-[#6C5CE7] border-t-transparent rounded-full mx-auto mb-4" />
                    <div className="text-gray-500">로드맵을 불러오는 중...</div>
                </div>
            </div>
        )
    }

    // Error state
    if (error || !roadmap) {
        return (
            <div className="bg-[#f7f8fa] min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 mb-4 text-lg">😢</div>
                    <div className="text-red-500 mb-2">로드맵을 불러오는데 실패했습니다.</div>
                    <a href="/bundles" className="text-[#6C5CE7] hover:underline text-sm">
                        ← 목록으로 돌아가기
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#f7f8fa]">
            <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-[1100px]">
                {/* Stats Section - simplified */}
                <section className="flex items-center justify-center gap-3 mb-8">
                    <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                        📋 {roadmap.steps.length}개 단계
                    </div>
                    <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700">
                        ✅ {roadmap.todoCount}개 투두
                    </div>
                </section>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Roadmap Steps */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {roadmap.steps.length > 0 ? (
                            roadmap.steps.map((step, index) => (
                                <RoadmapStep
                                    key={step.id}
                                    step={step}
                                    defaultExpanded={index === 0}
                                />
                            ))
                        ) : (
                            <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
                                이 로드맵에 등록된 단계가 없습니다.
                            </div>
                        )}
                    </div>

                    {/* Right Column: CTA */}
                    <div className="lg:col-span-4">
                        <RoadmapCTA
                            onCopy={handleCopyRoadmap}
                            isLoading={isCopying}
                            presetName={roadmap.name}
                            presetDescription={roadmap.description}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
