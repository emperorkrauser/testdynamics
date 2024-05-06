import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};
