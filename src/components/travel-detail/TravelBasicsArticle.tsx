import { PropsWithChildren } from 'react';
import { TravelArticle } from '../common/TravelArticle';

type TravelBasicsArticleProps = {
  margins?: string;
  fontSize?: string;
  title: string;
};

export const TravelBasicsArticle: React.FC<PropsWithChildren<TravelBasicsArticleProps>> = ({
  margins,
  fontSize,
  title,
  children,
}) => {
  return (
    <TravelArticle
      margins={margins}
      fontSize={fontSize}
      title={title}
      titleColor="text-primary-100"
    >
      {children}
    </TravelArticle>
  );
};
