import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MainLayout from '../layout/MainLayout';
import { UserType } from '../types/auth';

const ProtectedRoute = ( {redirectTo} ) => {
  const auth = useAuth();
  const currentUser = auth?.currentUser as UserType;
  const location = useLocation();

  if (!currentUser) {
    return (
      <Navigate
        to={redirectTo}
        replace
        state={{
          redirectTo: location,
        }}
      />
    );
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default ProtectedRoute;
