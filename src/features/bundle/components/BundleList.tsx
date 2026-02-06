import { useBundles } from '../hooks/useBundles'
import BundleCard from './BundleCard'

export default function BundleList() {
  const { data: bundles, isLoading } = useBundles()

  if (isLoading) {
    return <div className="text-gray-500">Loading bundles...</div>
  }

  if (!bundles?.length) {
    return <div className="text-gray-500">No bundles found.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bundles.map((bundle) => (
        <BundleCard key={bundle.id} bundle={bundle} />
      ))}
    </div>
  )
}
