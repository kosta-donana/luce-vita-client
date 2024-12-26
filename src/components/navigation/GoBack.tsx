import { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GoBack: React.FC = () => {
  const navigate = useNavigate();
  const isNavigationExecutedRef = useRef(false);

  useLayoutEffect(() => {
    if (!isNavigationExecutedRef.current) {
      isNavigationExecutedRef.current = true;
      navigate(-1);
    }
  }, [navigate]);

  return <></>;
};
