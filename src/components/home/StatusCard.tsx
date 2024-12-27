import { useMemo } from 'react';
import { DateBlock } from './DateBlock';

// 주어진 날짜가 포함된 주의 시작 날짜 계산
function getStartOfWeek(date: Date): Date {
  const day = date.getDay();
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
}

// 시작 날짜(일요일)로 시작해서 numOfWeeks만큼(우리의 경우 3주) 주 생성
function generateWeeks(startDate: Date, numOfWeeks: number): Date[][] {
  const weeks: Date[][] = [];
  for (let i = 0; i < numOfWeeks; i++) {
    const week: Date[] = [];
    for (let j = 0; j < 7; j++) {
      week.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

// 현재 날짜가 시작일, 종료일 사이에 있는지 확인
function isWithinRange(date: Date, start: Date, end: Date): boolean {
  date.setHours(9, 0, 0, 0);
  return date >= start && date <= end;
}

export function StatusCard({ startDate, endDate }: { startDate: string; endDate: string }) {
  const today = new Date();
  const startOfCurrentWeek = getStartOfWeek(new Date(today));
  const weeks = useMemo(() => generateWeeks(new Date(startOfCurrentWeek), 3), [startOfCurrentWeek]);
  const [start, end] = [new Date(startDate), new Date(endDate)];

  return (
    <div className="flex flex-col justify-center my-7 p-6 gap-3 rounded-3xl shadow-md shadow-gray-400 bg-primary-400">
      {/* 일정 상태 */}
      <div className="my-1.5 w-full text-left text-4xl font-bold text-white">
        여행이 일주일 남았습니다!
      </div>

      {/* 캘린더 */}
      <div className="w-full grid grid-rows-3 grid-cols-7 gap-3 px-2">
        {weeks.flat().map((date, index) => (
          <DateBlock key={index} isTravel={isWithinRange(date, start, end)}>
            {date.getDate().toString()}
          </DateBlock>
        ))}
      </div>

      {/* 예정일 계산 */}
      <div className="w-full text-right text-2xl text-white">
        여행 예정일까지{' '}
        <span className="text-3xl font-bold text-secondary-400">
          {Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))}
        </span>
        일 전
      </div>
    </div>
  );
}
