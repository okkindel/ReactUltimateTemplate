import { useQuery } from '@tanstack/react-query';
import { currentUserDetails } from '@api/auth';
import { useUserStore } from '@/shared/stores';
import { Layout } from '@core/layout/layout';
import { Outlet } from 'react-router-dom';
import { useEffect, FC } from 'react';

export const ProtectedRoute: FC = () => {
  const { setUser, user, userLogout: logout } = useUserStore();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['currentUserDetails'],
    queryFn: currentUserDetails,
    enabled: !user,
    retry: false,
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

  useEffect(() => {
    if (isError) logout();
  }, [isError, logout]);

  if (isLoading) {
    return <>LOADING</>;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
