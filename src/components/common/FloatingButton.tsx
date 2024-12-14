import { FloatingButtonProps } from '../../models/props.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * 플로팅 버튼 컴포넌트입니다.
 */
const FloatingButton: React.FC<FloatingButtonProps> = ({ iconInfo }) => {
  return (
    <button
      type="button"
      className="absolute z-10 right-0 bottom-0 m-8 bg-primary-500 hover:bg-secondary-400 size-24 text-neutral-200 hover:text-neutral-100 rounded-full shadow-md shadow-gray-500"
    >
      <FontAwesomeIcon
        icon={iconInfo.id}
        onClick={iconInfo.onClickHandler}
        size="4x"
        title={iconInfo.title}
      />
    </button>
  );
};

export default FloatingButton;
