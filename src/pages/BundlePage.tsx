import BundleContainer from '../features/bundle/components/BundleContainer'
import { useOnboardingStore } from '../features/onboarding/stores/onboardingStore'
import { POPULAR_COMPANIES } from '../features/onboarding/hooks/useOnboarding'

export default function BundlePage() {
    const { selectedCompany, selectedField } = useOnboardingStore()
    const company = POPULAR_COMPANIES.find(c => c.id === selectedCompany)

    return (
        <BundleContainer
            company={company?.name ?? '네이버'}
            jobTitle={selectedField === 'developer' ? '백엔드 개발' : selectedField ?? '백엔드 개발'}
        />
    )
}