import { PropsWithChildren } from 'react';
import { TravelArticleProps } from '../../models/props.model';

/**
 * 여행 정보를 나타내는 항목 컴포넌트입니다.
 */
export const TravelArticle: React.FC<PropsWithChildren<TravelArticleProps>> = ({
  margins,
  fontSize,
  title,
  titleColor,
  children,
}) => {
  return (
    <article className={`${margins ?? ''} w-full ${fontSize ?? ''} font-medium`.trim()}>
      <h1 className={`my-1 ${titleColor} text-lg`}>{title}</h1>
      {children}
    </article>
  );
};
