import { PropsWithChildren, useState, useLayoutEffect } from 'react';
import { authenticate } from '../../api/authenticate';
import { GoBack } from '../navigation/GoBack';

export const ExcludeAuth: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<true | false | null>(null);

  useLayoutEffect(() => {
    authenticate().then((result) => {
      setIsAuthenticated(result);
    });
  }, []);

  if (isAuthenticated === null) {
    return <></>;
  }

  return isAuthenticated ? <GoBack /> : children;
};
