import { Budget } from '../models/travel.model';
import { formatToString } from './format-date.util';

/**
 * 지나간 일정들로 인해 오늘이 되기 전까지 소비한 누적 금액을 반환하는 함수입니다.
 */
export function accumulateSpent(budgetList: Budget[]): number {
  let spent = 0;
  const today = formatToString(new Date());

  for (const budget of budgetList) {
    if (budget.schedule_date >= today) break;

    spent += budget.budget;
  }

  return spent;
}
