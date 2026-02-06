import { useParams } from 'react-router-dom';
import { PageContainer } from '@/shared/components/layout/PageContainer';

export function ProfilePage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <h1 className="text-2xl font-bold text-text">프로필 ({id})</h1>
    </PageContainer>
  );
}
