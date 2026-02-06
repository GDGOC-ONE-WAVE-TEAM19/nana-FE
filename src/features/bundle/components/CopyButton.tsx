import { useState } from 'react'
import Button from '../../../shared/components/ui/Button'

interface CopyButtonProps {
  bundleId: string
}

export default function CopyButton({ bundleId: _bundleId }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="primary" size="sm" onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy to My Plan'}
    </Button>
  )
}
