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
  const [upcomingTravels, setUpcomingTravels] = useState<Travel[] | null>();
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:3000/api/travels/${import.meta.env.VITE_TEST_USER_UUID}`
      );
      return result;
    },
  });

  const clickTravelHandler = () => {
    navigate(`/travels`);
  };

  useEffect(() => {
    console.log('data?.data.data:', data?.data.data);
    if (data) {
      const ongoingTravels = data.data.data.ongoingTravels;
      const upcomingTravels = data.data.data.upcomingTravels;
      if (ongoingTravels.length > 0) {
        setCurrentTravel(ongoingTravels[0]);
        if (upcomingTravels.length > 0) {
          setUpcomingTravels(upcomingTravels.reverse());
        }
      } else if (upcomingTravels.length > 0) {
        setCurrentTravel(upcomingTravels[0]);
        if (upcomingTravels.length >= 2) {
          setUpcomingTravels(upcomingTravels.slice(1).reverse());
        }
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
      {currentTravel ? (
        <Status startDate={currentTravel.start_date} endDate={currentTravel.end_date} />
      ) : (
        <Status startDate={'1999-01-01'} endDate={'1999-12-31'} />
      )}

      {/* 현재 진행중인 여행 */}
      {currentTravel ? (
        <TravelCard travel={currentTravel} travelStatus="" onClickHandler={clickTravelHandler} />
      ) : (
        <EmptyCard />
      )}

      {/* 예정된 여행들 (오름차순) */}
      {upcomingTravels &&
        upcomingTravels.map((travel) => (
          <TravelCard
            key={travel.travel_id}
            travel={travel}
            travelStatus=""
            onClickHandler={clickTravelHandler}
          />
        ))}

      <CreateTravelButton
        navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/travels/create' }}
      />
    </div>
  );
});
