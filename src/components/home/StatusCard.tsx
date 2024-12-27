import { useMemo } from 'react';
import { DateBlock } from './DateBlock';
import { getStartOfWeek, generateWeeks, isWithinRange } from '../../utils/calculate-date.util';

type StatusCardProps = {
  startDate: string;
  endDate: string;
};

export function StatusCard({ startDate, endDate }: StatusCardProps) {
  const today = new Date();
  const startOfCurrentWeek = getStartOfWeek(new Date(today));
  const weeks = useMemo(() => generateWeeks(new Date(startOfCurrentWeek), 3), [startOfCurrentWeek]);
  const [start, end] = [new Date(startDate), new Date(endDate)];
  const dday = Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col justify-center my-7 p-6 gap-3 rounded-3xl shadow-md shadow-gray-400 bg-primary-400">
      {/* 일정 상태 */}
      <div className="my-1.5 w-full text-left text-4xl font-bold text-white">
        {dday > 0 ? (
          <span>여행이 다가오고 있어요</span>
        ) : dday === 0 ? (
          <span>여행을 떠나요!</span>
        ) : (
          <span>즐거운 여행이 계속돼요</span>
        )}
      </div>
      {/* 캘린더 */}
      <div className="w-full grid grid-rows-3 grid-cols-7 gap-3 px-2">
        {weeks.flat().map((date, i) => (
          <DateBlock key={i} isTravel={isWithinRange(date, start, end)}>
            {date.getDate().toString()}
          </DateBlock>
        ))}
      </div>
      {/* 예정일 계산 */}
      <div className="w-full text-right text-2xl text-white">
        {dday > 0 ? (
          <span>
            여행 예정일까지 <span className="text-3xl font-bold text-secondary-400">{dday}</span>일
            전
          </span>
        ) : dday === 0 ? (
          <span>여행이 오늘 시작해요!</span>
        ) : (
          <span>여행 중이에요</span>
        )}
      </div>
    </div>
  );
}
