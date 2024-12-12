import { DateBlock } from '../components/home/DateBlock';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';
import { Header } from '../components/home/Header';
import { CreateTravelButton } from '../components/home/CreateTravelButton';

// interface Travel {};

// const travels = [];

export function Home() {
  return (
    <div className="p-6 relative">
      {/* 헤더 */}
      <Header />

      {/* 여기도 컴포넌트로 분리 여행상태창카드?? */}

      {/* 여행 일정 캘린더 */}
      <div className="flex flex-col justify-center p-6 gap-3 rounded-xl bg-primary-400">
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
          여행 예정일까지 <span className="text-3xl text-secondary-400">6</span>일 전
        </div>
      </div>

      {/* 예정된 여행 카드 */}
      <TravelCard />

      {/* 빈 여행 카드 자리 */}
      <TravelEmpty />

      {/* 추가 버튼 */}
      <CreateTravelButton />
    </div>
  );
}
