import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { router } from '@/routes';

export function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}
