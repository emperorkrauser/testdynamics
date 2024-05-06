import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from '../../utils';
import { Login } from './login';
import { Management, Dashboard } from '../pages';

const PrivatePages = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuth ? <Login /> : <Dashboard />} />
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/management" element={<Management />} />
          <Route path="/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

const PublicPages = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuth ? <Login /> : <Dashboard />} />
        <Route
          path="/dashboard"
          element={!isAuth ? <Login /> : <Dashboard />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export const BasePage = () => {
  const { isAuth } = useSelector((state: any) => state.auth);
  if (isAuth) {
    return (
      <>
        <PrivatePages isAuth={isAuth} />
      </>
    );
  }

  return <PublicPages isAuth={isAuth} />;
};
