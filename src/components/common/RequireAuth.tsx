import { Navigate, Outlet } from 'react-router-dom';
import { RequireAuthProps } from '../../models/props.model';
import { authenticate } from '../../utils/auth.util';

export const RequireAuth: React.FC<RequireAuthProps> = ({ redirect }) => {
  return authenticate() ? <Outlet /> : <Navigate to={redirect} replace />;
};
