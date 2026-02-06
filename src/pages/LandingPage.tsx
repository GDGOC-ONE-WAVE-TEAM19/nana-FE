import LandingHeader from '../features/landing/components/LandingHeader'
import HeroSection from '../features/landing/components/HeroSection'
import StatsSection from '../features/landing/components/StatsSection'
import CoreFeaturesSection from '../features/landing/components/CoreFeaturesSection'
import HowItWorksSection from '../features/landing/components/HowItWorksSection'
import PersonaSection from '../features/landing/components/PersonaSection'
import LandingFooter from '../features/landing/components/LandingFooter'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-['Noto_Sans_KR'] text-gray-800 antialiased flex flex-col">
      <LandingHeader />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CoreFeaturesSection />
        <HowItWorksSection />
        <PersonaSection />
      </main>
      <LandingFooter />
    </div>
  )
}
