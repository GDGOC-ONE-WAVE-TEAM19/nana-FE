import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg">
      <h1 className="text-4xl font-bold text-primary">GrowLog</h1>
      <p className="mt-3 text-gray">함께 성장하는 프로젝트 관리</p>
      <Link
        to="/login"
        className="mt-8 rounded-pill bg-primary px-8 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
      >
        시작하기
      </Link>
    </div>
  );
}
