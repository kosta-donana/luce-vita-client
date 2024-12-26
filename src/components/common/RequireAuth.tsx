import { useState, useLayoutEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { RequireAuthProps } from '../../models/props.model';
import { authenticate } from '../../api/authenticate';

export const RequireAuth: React.FC<RequireAuthProps> = ({ redirect }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<true | false | null>(null);

  useLayoutEffect(() => {
    authenticate().then((result) => {
      setIsAuthenticated(result);
    });
  }, []);

  if (isAuthenticated === null) {
    return <></>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={redirect} />;
};
