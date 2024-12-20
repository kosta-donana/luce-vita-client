import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GoBack: React.FC = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate(-1);
  });

  return <></>;
};
