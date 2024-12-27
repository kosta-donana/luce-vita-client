import { To, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FloatingNavButtonProps } from '../../models/props.model';

/**
 * 플로팅 버튼 컴포넌트입니다.
 */
export const FloatingNavButton: React.FC<FloatingNavButtonProps> = ({ navIconInfo, top }) => {
  const navigate = useNavigate();

  function navigateToOrNumber(route: To | number) {
    if (typeof route === 'number') {
      navigate(route);
    } else {
      navigate(route);
    }
  }

  return (
    <button
      type="button"
      className="sticky z-10 left-full mx-2 bg-primary-500 hover:bg-secondary-400 size-24 text-neutral-200 hover:text-neutral-100 rounded-full shadow-md shadow-gray-500"
      style={{ top }}
      onClick={() => {
        navigateToOrNumber(navIconInfo.route);
      }}
    >
      <FontAwesomeIcon icon={navIconInfo.id} size="4x" title={navIconInfo.title} />
    </button>
  );
};
