import ProgressSection from '../features/dashboard/components/ProgressSection'
import ComparisonBar from '../features/dashboard/components/ComparisonBar'
import ActivityHeatmap from '../features/dashboard/components/ActivityHeatmap'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      <ProgressSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComparisonBar />
        <ActivityHeatmap />
      </div>
    </div>
  )
}
