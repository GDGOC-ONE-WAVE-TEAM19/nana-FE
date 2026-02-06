import DashboardHeader from '../features/dashboard/components/DashboardHeader'
import ProgressSection from '../features/dashboard/components/ProgressSection'
import TodayPlanCard from '../features/dashboard/components/TodayPlanCard'
import CategoryFilterPills from '../features/dashboard/components/CategoryFilterPills'
import DashboardTodoList from '../features/dashboard/components/DashboardTodoList'
import WeeklyBalanceCard from '../features/dashboard/components/WeeklyBalanceCard'

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <div className="mt-6">
        <ProgressSection />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-8 space-y-5 lg:space-y-6">
          <TodayPlanCard />
          <CategoryFilterPills />
          <DashboardTodoList />
        </div>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-6">
            <WeeklyBalanceCard />
          </div>
        </div>
      </div>
    </>
  )
}
