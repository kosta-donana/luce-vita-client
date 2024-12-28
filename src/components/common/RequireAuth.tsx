import { useState, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { authenticate } from '../../api/authenticate';
import { Loading } from '../navigation/Loading';

export const RequireAuth: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<true | false | null>(null);

  useLayoutEffect(() => {
    authenticate().then((result) => {
      setIsAuthenticated(result);
    });
  }, []);

  return isAuthenticated ? <Outlet /> : <Loading hasFailed={!(isAuthenticated ?? true)} />;
};
