import { PropsWithChildren } from 'react';
import { TravelArticle } from '../common/TravelArticle';

type TravelBudgetArticleProps = {
  margin?: string;
  fontSize?: string;
  title: string;
};

export const TravelBudgetArticle: React.FC<PropsWithChildren<TravelBudgetArticleProps>> = ({
  margin,
  fontSize,
  title,
  children,
}) => {
  return (
    <TravelArticle margin={margin} fontSize={fontSize} title={title} titleColor="text-primary-200">
      {children}
    </TravelArticle>
  );
};
