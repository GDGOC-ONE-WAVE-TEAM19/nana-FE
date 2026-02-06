import Card from '../../../shared/components/ui/Card'

export default function ActivityHeatmap() {
  // Placeholder - will be connected to real activity data
  const weeks = 12
  const days = 7
  const cells = Array.from({ length: weeks * days }, (_, i) => ({
    date: new Date(Date.now() - (weeks * days - i) * 86400000).toISOString().split('T')[0],
    count: Math.floor(Math.random() * 5),
  }))

  const intensities = [
    'bg-gray-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-500',
    'bg-green-700',
  ]

  return (
    <Card padding="lg">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      <div className="flex gap-1 flex-wrap">
        {cells.map((cell) => (
          <div
            key={cell.date}
            className={`w-3 h-3 rounded-sm ${intensities[cell.count]}`}
            title={`${cell.date}: ${cell.count} activities`}
          />
        ))}
      </div>
    </Card>
  )
}
