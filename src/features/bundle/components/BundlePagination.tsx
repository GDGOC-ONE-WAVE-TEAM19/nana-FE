interface BundlePaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const ChevronLeftIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
)

const ChevronRightIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
)

export default function BundlePagination({ currentPage, totalPages, onPageChange }: BundlePaginationProps) {
    const getVisiblePages = () => {
        const pages: (number | string)[] = []

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages)
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', currentPage, '...', totalPages)
            }
        }

        return pages
    }

    return (
        <div className="flex justify-center items-center mt-12 gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeftIcon />
            </button>

            {getVisiblePages().map((page, index) => (
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full font-medium text-sm transition-colors ${currentPage === page
                                ? 'bg-[#6C5CE7] text-white shadow-md'
                                : 'hover:bg-gray-100 text-gray-600'
                            }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="text-gray-400">{page}</span>
                )
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRightIcon />
            </button>
        </div>
    )
}
