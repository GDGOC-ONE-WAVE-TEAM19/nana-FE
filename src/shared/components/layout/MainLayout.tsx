import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
