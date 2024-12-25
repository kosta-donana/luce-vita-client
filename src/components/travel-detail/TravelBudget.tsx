import { TravelBudgetArticle } from './TravelBudgetArticle';

type TravelBudgetProps = {
  currency: string;
  total: number;
  spent: number;
};

export const TravelBudget: React.FC<TravelBudgetProps> = ({ currency, total, spent }) => {
  return (
    <section className="mt-4 px-5 py-6 bg-primary-400 text-secondary-400 rounded-2xl">
      <div className="flex">
        <TravelBudgetArticle fontSize="text-3xl" title="총 예산">
          {total.toLocaleString() + ' ' + currency}
        </TravelBudgetArticle>
        <TravelBudgetArticle fontSize="text-3xl" title="소비 금액">
          {spent.toLocaleString() + ' ' + currency}
        </TravelBudgetArticle>
      </div>
      <TravelBudgetArticle margin="mt-6" fontSize="text-3xl" title="남은 금액">
        {(total - spent).toLocaleString() + ' ' + currency}
      </TravelBudgetArticle>
    </section>
  );
};
