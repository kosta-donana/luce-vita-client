import { DateBlock } from '../components/home/DateBlock';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';

export function Home() {
  return (
    <div className="p-6">
      {/* 헤더 */}
      <header>헤더</header>

      {/* 여행 일정 캘린더 */}
      <div className="flex flex-col justify-center p-6 gap-3 rounded-xl bg-gray-300">
        {/* 일정 상태 */}
        <div className="w-full text-left text-4xl font-bold text-gray-700">
          여행이 일주일 남았습니다 !
        </div>

        {/* 캘린더 */}
        <div className="w-full grid grid-rows-3 grid-cols-7 gap-2 px-2">
          {Array.from({ length: 21 }, (_, i) => (
            <DateBlock isTravel={6 <= i && i <= 11 ? true : false}>{(i + 1).toString()}</DateBlock>
          ))}
        </div>

        {/* 예정일 계산 */}
        <div className="w-full text-right text-2xl font-bold text-gray-700">
          여행 예정일까지 6일 전
        </div>
      </div>

      {/* 예정된 여행 카드 */}
      <TravelCard />

      {/* 빈 여행 카드 자리 */}
      <TravelEmpty />

      {/* 추가 버튼 */}
      <div>(+)</div>
    </div>
  );
}
