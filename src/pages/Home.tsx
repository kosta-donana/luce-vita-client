import { useState } from 'react';
import { faHouseFlag, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
import { TopNav } from '../components/common/TopNav';
import { FloatingNavButton } from '../components/common/FloatingNavButton';
import { TravelStatus } from '../components/home/TravelStatus';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';

const dummyTravels: Array<Travel> = [
  {
    travelid: 11,
    userid: '10dhdof03hd9dh',
    country: { countryname: '대한민국', currency: 'KRW' },
    title: '제목이다이것이',
    startdate: '1202',
    enddate: '1207',
    localname: '금천구',
    address: '자세한주소인것임',
    travelimg: 'https://??????',
    budgettotal: 110000,
    tags: ['태그1'],
    memo: '메모별것도없네이거',
  },
  {
    travelid: 22,
    userid: '32dkch109fbos6',
    country: { countryname: '대한민국', currency: 'KRW' },
    title: '이것도여행인것인거임',
    startdate: '1209',
    enddate: '1214',
    localname: '디지털단지',
    address: '호서호서호서호서구내식당당',
    travelimg: 'https://!!!!!!',
    budgettotal: 220000,
    tags: ['태그2', '태그3'],
    memo: '메모를쓰지않은것이냐어째서',
  },
];

export const Home = withNavigation(() => {
  const [travels] = useState<Array<Travel>>(dummyTravels);

  return (
    <div className="p-6 bg-primary-100 min-h-full flex flex-col gap-5">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          // TODO: 내비게이션 아이콘 변경 및 커뮤니티 기능 연결하기
          { id: faHouseFlag, title: '커뮤니티 기능으로 임시 이동하기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/' },
        ]}
        bgColor="bg-primary-100"
        iconColor="text-primary-300"
        title="Luce Vita"
        titleColor="text-slate-700"
      />
      {/* 플로팅 버튼 */}
      <FloatingNavButton navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/' }} />

      <TravelStatus />
      {travels.length > 0 ? (
        travels.map((travel) => <TravelCard key={travel.travelid} travel={travel} />)
      ) : (
        <TravelEmpty />
      )}
    </div>
  );
});
