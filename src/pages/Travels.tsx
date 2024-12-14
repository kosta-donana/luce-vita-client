import TopNav from '../components/common/TopNav';
import FloatingNavButton from '../components/common/FloatingNavButton';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';
import { faHouse, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

export function Travels() {
  return (
    <div className="p-6 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faHouse, title: '홈 화면으로 이동하기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/' },
        ]}
        bgColor="bg-primary-100"
        iconColor="text-primary-300"
        title="여행 리스트"
        titleColor="text-primary-300"
      />
      {/* 플로팅 버튼 */}
      <FloatingNavButton navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/' }} />

      <TravelCard />
      <TravelEmpty />
    </div>
  );
}
