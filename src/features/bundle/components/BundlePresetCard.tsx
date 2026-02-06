import { useNavigate } from 'react-router-dom'
import type { PresetInfo } from '../../../shared/api'

interface BundlePresetCardProps {
    preset: PresetInfo
}

// Icons
const TagIcon = () => (
    <svg className="h-4 w-4 text-[#6C5CE7]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM20.97 5.03a.75.75 0 0 0-1.06-1.06l-3.79 3.79L11 2.64a.75.75 0 0 0-.65-.39H3.75A2.75 2.75 0 0 0 1 5v6.75a.75.75 0 0 0 .25.56l5.12 5.12a.75.75 0 0 0 1.06 0l6.12-6.12L17 15a.75.75 0 0 0 1.06 0l2.91-3.97Z" />
    </svg>
)

const ChecklistIcon = () => (
    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
)

export default function BundlePresetCard({ preset }: BundlePresetCardProps) {
    const navigate = useNavigate()

    const handleViewRoadmap = () => {
        navigate(`/bundles/${encodeURIComponent(preset.name)}`)
    }

    return (
        <article className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-[#6C5CE7] flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300">
            <div>
                {/* Header */}
                <div className="mb-4">
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">{preset.name}</h3>
                    {preset.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">{preset.description}</p>
                    )}
                </div>

                {/* Stats Grid */}
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5">
                        <TagIcon />
                        <span>{preset.tag_count}개 태그</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ChecklistIcon />
                        <span>{preset.todo_count}개 투두</span>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <button
                onClick={handleViewRoadmap}
                className="w-full py-3 rounded-xl bg-[#EFEEFF] text-[#6C5CE7] font-bold text-sm hover:bg-purple-100 transition-colors flex items-center justify-center gap-1 group"
            >
                이 로드맵 보기
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </article>
    )
}
