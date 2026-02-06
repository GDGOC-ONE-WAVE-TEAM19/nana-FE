import { useDashboard } from '../hooks/useDashboard'
import Card from '../../../shared/components/ui/Card'
import ProgressBar from '../../../shared/components/ui/ProgressBar'

export default function ProgressSection() {
  const { total, done, inProgress, pending, progress } = useDashboard()

  return (
    <Card padding="lg">
      <h3 className="text-lg font-semibold mb-4">Overall Progress</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <ProgressBar value={progress} className="flex-1" />
          <span className="text-2xl font-bold text-blue-600">{progress}%</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">{done}</p>
            <p className="text-xs text-gray-500">Done</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-600">{inProgress}</p>
            <p className="text-xs text-gray-500">In Progress</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-400">{pending}</p>
            <p className="text-xs text-gray-500">Pending</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center">{done} of {total} tasks completed</p>
      </div>
    </Card>
  )
}
