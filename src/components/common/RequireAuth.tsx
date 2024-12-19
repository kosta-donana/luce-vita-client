import { Outlet } from 'react-router-dom';
import { RequireAuthProps } from '../../models/props.model';

export const RequireAuth: React.FC<RequireAuthProps> = ({ redirect }) => {
  return <Outlet />;
  // return authenticate() ? <Outlet /> : <Navigate to={redirect} />;
};
