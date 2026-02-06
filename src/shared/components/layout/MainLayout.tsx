import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-bg">
      {/* <Sidebar /> */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
