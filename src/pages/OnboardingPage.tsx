import CompanySelector from '../features/onboarding/components/CompanySelector'
import JobSelector from '../features/onboarding/components/JobSelector'

export default function OnboardingPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome to StepIn</h2>
        <p className="mt-2 text-gray-600">Set your target company and job to get started.</p>
      </div>
      <CompanySelector />
      <JobSelector />
    </div>
  )
}
