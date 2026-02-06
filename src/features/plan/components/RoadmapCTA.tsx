interface RoadmapCTAProps {
    onCopy: () => void
}

const DownloadIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
    </svg>
)

export default function RoadmapCTA({ onCopy }: RoadmapCTAProps) {
    return (
        <div className="sticky top-24">
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <button
                    onClick={onCopy}
                    className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#4834D4] hover:from-[#5b4bc4] hover:to-[#3c2bb8] text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_8px_24px_rgba(108,92,231,0.5)] transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
                >
                    <span>이 로드맵을 내 플랜으로 가져오기</span>
                    <DownloadIcon />
                </button>
                <p className="text-center text-xs text-gray-400">
                    가져온 후 자유롭게 수정할 수 있어요
                </p>
            </div>
        </div>
    )
}
