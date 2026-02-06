import BundleList from '../features/bundle/components/BundleList'

export default function BundlePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Bundles</h2>
      <BundleList />
    </div>
  )
}
