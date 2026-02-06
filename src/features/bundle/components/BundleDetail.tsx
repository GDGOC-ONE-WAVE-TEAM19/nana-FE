import type { Bundle } from '../types'
import Card from '../../../shared/components/ui/Card'
import CopyButton from './CopyButton'

interface BundleDetailProps {
  bundle: Bundle
}

export default function BundleDetail({ bundle }: BundleDetailProps) {
  return (
    <Card padding="lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{bundle.title}</h2>
          <CopyButton bundleId={bundle.id} />
        </div>
        <p className="text-gray-600">{bundle.description}</p>
        <div className="space-y-2">
          {bundle.todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">{todo.title}</span>
              <span className="text-xs text-gray-500">{todo.estimatedHours}h</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
