import { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GoBack: React.FC = () => {
  const navigate = useNavigate();
  const isNavigationExecutedRef = useRef(false);

  useLayoutEffect(() => {
    if (!isNavigationExecutedRef.current) {
      navigate(-1);
      isNavigationExecutedRef.current = true;
    }

    return () => {
      isNavigationExecutedRef.current = false;
    };
  }, [navigate]);

  return <></>;
};
