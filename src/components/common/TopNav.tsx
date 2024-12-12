import { TopNavProps } from '../../models/common.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopNav: React.FC<TopNavProps> = ({ iconInfos, bgColor, iconColor, title, titleColor }) => {
  return (
    <nav className={`p-5 ${bgColor} ${iconColor} rounded-3xl flex justify-between items-center`}>
      <FontAwesomeIcon
        icon={iconInfos[0].id}
        onClick={iconInfos[0].onClickHandler}
        size="3x"
        title={iconInfos[0].title}
      />
      <h1 className={`${titleColor} text-4xl font-semibold`}>{title}</h1>
      <FontAwesomeIcon
        icon={iconInfos[1].id}
        onClick={iconInfos[1].onClickHandler}
        size="3x"
        title={iconInfos[1].title}
      />
    </nav>
  );
};

export default TopNav;
