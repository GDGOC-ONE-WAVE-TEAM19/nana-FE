import { useState } from 'react'
import DashboardHeader from '../features/dashboard/components/DashboardHeader'
import ProgressSection from '../features/dashboard/components/ProgressSection'
import TodayPlanCard from '../features/dashboard/components/TodayPlanCard'
import CategoryFilterPills from '../features/dashboard/components/CategoryFilterPills'
import DashboardTodoList from '../features/dashboard/components/DashboardTodoList'
import WeeklyBalanceCard from '../features/dashboard/components/WeeklyBalanceCard'

export default function DashboardPage() {
  const [selectedTag, setSelectedTag] = useState('all')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Left Column: Main Content */}
      <div className="lg:col-span-7 space-y-5 lg:space-y-6">
        <DashboardHeader />
        <ProgressSection />
        <TodayPlanCard />
        <CategoryFilterPills
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        <DashboardTodoList selectedTag={selectedTag} />
      </div>

      {/* Right Column: Weekly Balance - fixed position, not sticky */}
      <div className="lg:col-span-5">
        <WeeklyBalanceCard />
      </div>
    </div>
  )
}
