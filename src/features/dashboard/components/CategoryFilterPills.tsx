/**
 * CategoryFilterPills - Dynamic tag-based filters from API
 */
import { useTodos } from '../todo/hooks/useTodos'

// Generate a color for a tag name (consistent hash-based color)
function getTagColor(tagName: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-red-500',
  ]
  let hash = 0
  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

interface CategoryFilterPillsProps {
  selectedTag: string
  onSelectTag: (tag: string) => void
}

export default function CategoryFilterPills({ selectedTag, onSelectTag }: CategoryFilterPillsProps) {
  const { tags, isLoading } = useTodos()

  if (isLoading) {
    return (
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        <div className="h-9 w-16 bg-gray-200 rounded-full animate-pulse" />
        <div className="h-9 w-24 bg-gray-200 rounded-full animate-pulse" />
      </div>
    )
  }

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      {/* All button */}
      <button
        onClick={() => onSelectTag('all')}
        className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium whitespace-nowrap transition-colors ${selectedTag === 'all'
            ? 'bg-[#5048e5] text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
          }`}
      >
        전체
      </button>

      {/* Dynamic tag buttons from API */}
      {tags.map((tag) => {
        const color = getTagColor(tag)
        return (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${selectedTag === tag
                ? 'bg-[#5048e5] text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
          >
            {selectedTag !== tag && (
              <span className={`w-2 h-2 rounded-full ${color}`} />
            )}
            {tag}
          </button>
        )
      })}
    </div>
  )
}
