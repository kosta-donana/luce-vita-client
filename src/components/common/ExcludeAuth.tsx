import { PropsWithChildren, useState, useEffect } from 'react';
import { authenticate } from '../../utils/auth.util';
import { GoBack } from './GoBack';

export const ExcludeAuth: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<true | false | null>(null);

  useEffect(() => {
    authenticate().then((result) => {
      setIsAuthenticated(result);
    });
  }, []);

  if (isAuthenticated === null) {
    return <></>;
  }

  return isAuthenticated ? <GoBack /> : children;
};
