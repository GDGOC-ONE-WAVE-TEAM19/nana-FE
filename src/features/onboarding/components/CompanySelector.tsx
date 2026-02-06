import { useState } from 'react'
import Card from '../../../shared/components/ui/Card'

export default function CompanySelector() {
  const [search, setSearch] = useState('')

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Target Company</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search company..."
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Card>
  )
}
