import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { To } from 'react-router-dom';

type NavIconInfo = {
  // Font Awesome 아이콘에 대한 이름 (카멜 표기법)
  id: IconDefinition;
  // 아이콘의 의미에 대한 설명 (Accessibility 관련)
  title: string;
  // 라우팅 경로
  route: To | number;
};

/**
 * 공통 컴포넌트의 Props 타입들을 정의하고 있는 파일입니다.
 */

export type RequireAuthProps = {
  redirect: To;
};

export type TopNavProps = {
  navIconInfos: [NavIconInfo, NavIconInfo];
  bgColor: string;
  iconColor: string;
  title: string;
  titleColor: string;
};

export type FloatingNavButtonProps = {
  navIconInfo: NavIconInfo;
};

export type TravelArticleProps = {
  margin?: string;
  fontSize?: string;
  title: string;
  titleColor: string;
};

export type InputProps = {
  required?: boolean;
  type: string;
  name: string;
  bgColor: string;
  borderColor: string;
  placeholder?: string;
};

export type FullWidthButtonProps = {
  type: 'button' | 'submit';
  margin?: string;
  bgColor: string;
  textColor: string;
  handleClick?: () => void;
};

export type HalfWidthButtonProps = {
  type: 'button' | 'submit';
  margin?: string;
  bgColor: string;
  textColor: string;
  handleClick?: () => void;
};
