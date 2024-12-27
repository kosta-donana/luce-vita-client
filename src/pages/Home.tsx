import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { faHouseFlag, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
// import { dummyTravels } from '../utils/dummy-travels.util';
import { TopNav } from '../components/common/TopNav';
import { FloatingNavButton as CreateTravelButton } from '../components/common/FloatingNavButton';
import { StatusCard as Status } from '../components/home/StatusCard';
import { TravelCard } from '../components/home/TravelCard';
import { EmptyCard } from '../components/home/EmptyCard';

export const Home = withNavigation(() => {
  // const [travels, setTravels] = useState<Travel[]>(dummyTravels);
  const navigate = useNavigate();
  const [currentTravel, setCurrentTravel] = useState<Travel | null>();
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:3000/api/travels/${import.meta.env.VITE_TEST_USER_UUID}`
      );
      return result;
    },
  });

  const clickTravelHandler = (travel_id: number) => {
    navigate(`/travels/${travel_id}`);
  };

  useEffect(() => {
    console.log('data?.data.data:', data?.data.data);
    if (data) {
      const ongoingTravels = data.data.data.ongoingTravels;
      const upcomingTravels = data.data.data.upcomingTravels;
      if (ongoingTravels.length > 0) {
        setCurrentTravel(ongoingTravels[0]);
      } else if (upcomingTravels.length > 0) {
        setCurrentTravel(upcomingTravels[0]);
      } else {
        setCurrentTravel(null);
      }
    }
  }, [data]);

  return (
    <div className="p-6 bg-primary-100 min-h-full flex flex-col gap-5">
      <TopNav
        navIconInfos={[
          { id: faHouseFlag, title: '커뮤니티 기능으로 임시 이동하기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
        ]}
        bgColor="bg-primary-100"
        iconColor="text-primary-300"
        title="Luce Vita"
        titleColor="text-slate-700"
      />

      {/* 여행 상태 캘린더 */}
      {/* {currentTravel ? (
        <Status startDate={currentTravel.start_date} endDate={currentTravel.end_date} />
      ) : (
        <Status startDate={'2000-01-01'} endDate={'2000-01-02'} />
      )} */}

      <Status startDate={'2024-12-29'} endDate={'2024-12-31'} />

      {currentTravel ? (
        <TravelCard
          travel={currentTravel}
          onClick={() => clickTravelHandler(currentTravel.travel_id)}
        />
      ) : (
        <EmptyCard />
      )}

      <CreateTravelButton
        navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/travels/create' }}
      />
    </div>
  );
});
