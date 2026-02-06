interface BadgeProps {
  label: string
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'gray'
  className?: string
}

export default function Badge({ label, color = 'blue', className = '' }: BadgeProps) {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700',
    gray: 'bg-gray-100 text-gray-700',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]} ${className}`}>
      {label}
    </span>
  )
}
