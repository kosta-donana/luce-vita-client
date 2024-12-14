import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconInfo = {
  // Font Awesome 아이콘에 대한 이름 (카멜 표기법)
  id: IconDefinition;
  // click 이벤트에 대한 콜백 함수
  onClickHandler: () => void;
  // 아이콘의 의미에 대한 설명 (Accessibility 관련)
  title: string;
};

export type FloatingButtonProps = {
  iconInfo: IconInfo;
};

export type TopNavProps = {
  iconInfos: IconInfo[];
  bgColor: string;
  iconColor: string;
  title: string;
  titleColor: string;
};

export type TravelArticleProps = {
  margin?: string;
  title: string;
  titleColor: string;
  textSize?: string;
};
