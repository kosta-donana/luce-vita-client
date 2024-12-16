import { Outlet } from 'react-router-dom';
import { authenticate } from '../../utils/auth.util';
import { Login } from '../../pages';

export const RequireAuth: React.FC<unknown> = () => {
  return authenticate() ? <Outlet /> : <Login />;
};
