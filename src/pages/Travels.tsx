import { useState } from 'react';
import { TopNav } from '../components/common/TopNav';
import { FloatingNavButton } from '../components/common/FloatingNavButton';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';
import { Travel } from '../models/travel.model';
import { faHouse, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const initialTravel = {
  travelid: 4,
  userid: 'useriduseriduserid',
  country: {
    countryname: 'seoul',
    currency: 'KRW',
  },
  title: '지금테스트중인여행',
  startdate: '1207',
  enddate: '1212',
  localname: '금천구',
  address: '코지하우스독산점',
  travelimg: '트레블이미지의주소',
  budgettotal: 123000,
  tags: ['가족', '추억'],
  memo: '딱히메모없음',
};

export function Travels() {
  const [travel] = useState<Travel>(initialTravel);

  return (
    <div className="p-6 bg-primary-100 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faHouse, title: '홈 화면으로 이동하기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/' },
        ]}
        bgColor="bg-primary-400"
        iconColor="text-primary-200"
        title="여행 목록"
        titleColor="text-primary-100"
      />
      {/* 플로팅 버튼 */}
      <FloatingNavButton navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/' }} />

      <TravelCard travel={travel} />
      <TravelEmpty />
    </div>
  );
}
