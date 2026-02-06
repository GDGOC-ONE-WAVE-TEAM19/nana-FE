import { useDashboard } from '../hooks/useDashboard'
import Card from '../../../shared/components/ui/Card'

export default function ComparisonBar() {
  const { categoryBreakdown } = useDashboard()

  const categories = Object.entries(categoryBreakdown)

  return (
    <Card padding="lg">
      <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
      <div className="space-y-3">
        {categories.map(([category, count]) => (
          <div key={category} className="flex items-center gap-3">
            <span className="text-sm text-gray-600 w-24 capitalize">{category}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(count / Math.max(...Object.values(categoryBreakdown))) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-900 w-8 text-right">{count}</span>
          </div>
        ))}
        {categories.length === 0 && (
          <p className="text-sm text-gray-500">No data yet.</p>
        )}
      </div>
    </Card>
  )
}
