interface InitialAvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_MAP = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
} as const

export default function InitialAvatar({ name, size = 'md' }: InitialAvatarProps) {
  const initial = name.charAt(0).toUpperCase() || '?'

  return (
    <div
      className={`${SIZE_MAP[size]} rounded-full bg-gradient-to-br from-[#5048e5] to-[#7B4EFF] flex items-center justify-center font-bold text-white flex-shrink-0`}
    >
      {initial}
    </div>
  )
}
