import { DateBlock } from './DateBlock';

export function StatusCard() {
  return (
    <div className="flex flex-col justify-center my-7 p-6 gap-3 rounded-3xl shadow-md shadow-gray-400 bg-primary-400">
      {/* 일정 상태 */}
      <div className="w-full text-left text-4xl font-bold text-white">
        여행이 일주일 남았습니다 !
      </div>

      {/* 캘린더 */}
      <div className="w-full grid grid-rows-3 grid-cols-7 gap-2 px-2">
        {Array.from({ length: 21 }, (_, i) => (
          <DateBlock isTravel={6 <= i && i <= 11 ? true : false}>{(i + 1).toString()}</DateBlock>
        ))}
      </div>

      {/* 예정일 계산 */}
      <div className="w-full text-right text-2xl text-white">
        여행 예정일까지 <span className="text-3xl font-bold text-secondary-400">6</span>일 전
      </div>
    </div>
  );
}
