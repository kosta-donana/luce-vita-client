import { PropsWithChildren } from 'react';
import { TravelArticle } from '../common/TravelArticle';

type TravelBudgetArticleProps = {
  margins?: string;
  fontSize?: string;
  title: string;
};

export const TravelBudgetArticle: React.FC<PropsWithChildren<TravelBudgetArticleProps>> = ({
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
      titleColor="text-primary-200"
    >
      {children}
    </TravelArticle>
  );
};
