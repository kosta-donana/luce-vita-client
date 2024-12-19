import { To, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopNavProps } from '../../models/props.model';

/**
 * 상단 내비게이션(앱 바) 컴포넌트입니다.
 */
export const TopNav: React.FC<TopNavProps> = ({
  navIconInfos,
  bgColor,
  iconColor,
  title,
  titleColor,
}) => {
  const navigate = useNavigate();

  function navigateToOrNumber(route: To | number) {
    if (typeof route === 'number') {
      navigate(route);
    } else {
      navigate(route);
    }
  }

  return (
    <nav
      className={`p-5 ${bgColor} ${iconColor} rounded-3xl shadow-md flex justify-between items-center`}
    >
      <FontAwesomeIcon
        icon={navIconInfos[0].id}
        onClick={() => {
          navigateToOrNumber(navIconInfos[0].route);
        }}
        size="3x"
        title={navIconInfos[0].title}
      />
      <h1 className={`${titleColor} text-4xl font-semibold`}>{title}</h1>
      <FontAwesomeIcon
        icon={navIconInfos[1].id}
        onClick={() => {
          navigateToOrNumber(navIconInfos[1].route);
        }}
        size="3x"
        title={navIconInfos[1].title}
      />
    </nav>
  );
};
