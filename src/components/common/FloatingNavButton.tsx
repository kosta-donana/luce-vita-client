import { To, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FloatingNavButtonProps } from '../../models/props.model';

/**
 * 플로팅 버튼 컴포넌트입니다.
 */
export const FloatingNavButton: React.FC<FloatingNavButtonProps> = ({ navIconInfo }) => {
  const navigate = useNavigate();

  function navigateToOrNumber(route: To | number) {
    if (typeof route == 'number') {
      navigate(route);
    } else {
      navigate(route);
    }
  }

  return (
    <button
      type="button"
      className="absolute z-10 right-0 bottom-0 m-8 bg-primary-500 hover:bg-secondary-400 size-24 text-neutral-200 hover:text-neutral-100 rounded-full shadow-md shadow-gray-500"
    >
      <FontAwesomeIcon
        icon={navIconInfo.id}
        onClick={() => {
          navigateToOrNumber(navIconInfo.route);
        }}
        size="4x"
        title={navIconInfo.title}
      />
    </button>
  );
};
