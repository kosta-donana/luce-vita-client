import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { RequireAuthProps } from '../../models/props.model';
import { authenticate } from '../../utils/auth.util';

export const RequireAuth: React.FC<RequireAuthProps> = ({ redirect }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<true | false | null>(null);

  useEffect(() => {
    authenticate().then((result) => {
      setIsAuthenticated(result);
    });
  }, []);

  if (isAuthenticated === null) {
    return <></>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={redirect} />;
};
