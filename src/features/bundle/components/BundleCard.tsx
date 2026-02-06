import type { Bundle } from '../types'
import Card from '../../../shared/components/ui/Card'
import Badge from '../../../shared/components/ui/Badge'

interface BundleCardProps {
  bundle: Bundle
}

export default function BundleCard({ bundle }: BundleCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-gray-900">{bundle.title}</h3>
          <Badge label={`${bundle.todos.length} todos`} color="blue" />
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{bundle.description}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{bundle.targetCompany}</span>
          <span>·</span>
          <span>{bundle.targetJob}</span>
        </div>
      </div>
    </Card>
  )
}
