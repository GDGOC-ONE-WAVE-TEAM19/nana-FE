import { useParams } from 'react-router-dom';
import { PageContainer } from '@/shared/components/layout/PageContainer';

export function ProjectDetailPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <h1 className="text-2xl font-bold text-text">프로젝트 상세 ({id})</h1>
    </PageContainer>
  );
}
