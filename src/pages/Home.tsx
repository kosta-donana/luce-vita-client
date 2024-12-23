import { useEffect, useState } from 'react';
import axios from 'axios';
import { faHouseFlag, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
import { dummyTravels } from '../utils/dummy-travels.util';
import { TopNav } from '../components/common/TopNav';
import { FloatingNavButton as CreateTravelButton } from '../components/common/FloatingNavButton';
import { StatusCard as Status } from '../components/home/StatusCard';
import { TravelCard } from '../components/home/TravelCard';
import { EmptyCard } from '../components/home/EmptyCard';

export const Home = withNavigation(() => {
  const [travels] = useState<Array<Travel>>(dummyTravels);

  useEffect(() => {
    const ajax = axios.create({
      baseURL: `http://localhost:3000/travels/${import.meta.env.VITE_TEST_USER_UUID}`,
      timeout: 5000,
    });
    (async () => {
      const result = await ajax({
        url: '/',
        method: 'get',
        data: {},
      });
      console.log(result);
    })();
  }, []);

  return (
    <div className="p-6 bg-primary-100 min-h-full flex flex-col gap-5">
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

      <Status />

      {travels.length > 0 ? (
        travels.map((travel) => <TravelCard key={travel.travelid} travel={travel} />)
      ) : (
        <EmptyCard />
      )}

      <CreateTravelButton navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/' }} />
    </div>
  );
});
