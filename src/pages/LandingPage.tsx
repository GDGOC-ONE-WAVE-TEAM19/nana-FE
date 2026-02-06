import LandingHeader from '../features/landing/components/LandingHeader'
import HeroSection from '../features/landing/components/HeroSection'
import FeaturesSection from '../features/landing/components/FeaturesSection'
import StatsSection from '../features/landing/components/StatsSection'
import LandingFooter from '../features/landing/components/LandingFooter'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-['Noto_Sans_KR'] text-gray-800 antialiased flex flex-col">
      <LandingHeader />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <LandingFooter />
    </div>
  )
}
