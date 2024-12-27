import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { faHouse, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
import { TopNav } from '../components/common/TopNav';
import { FloatingNavButton as CreateTravelButton } from '../components/common/FloatingNavButton';
import { TravelCard } from '../components/home/TravelCard';
import { EmptyCard } from '../components/home/EmptyCard';

export const Travels = withNavigation(() => {
  const navigate = useNavigate();
  const [currentTravel, setCurrentTravel] = useState<Travel | null>();
  const [upcomingTravels, setUpcomingTravels] = useState<Travel[] | null>();
  const [completedTravels, setCompletedTravels] = useState<Travel[] | null>();
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
      const completedTravels = data.data.data.completedTravels;
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
      setCompletedTravels(completedTravels);
    }
  }, [data]);

  return (
    <div className="p-6 bg-primary-100 min-h-full flex flex-col gap-5">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faHouse, title: '홈 화면으로 이동하기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
        ]}
        bgColor="bg-primary-400"
        iconColor="text-primary-200"
        title="여행 목록"
        titleColor="text-primary-100"
      />

      {/* 예정된 여행들 */}
      {upcomingTravels &&
        upcomingTravels.map((travel) => (
          <TravelCard
            key={travel.travel_id}
            travel={travel}
            travelStatus="upcoming"
            onClick={() => clickTravelHandler(travel.travel_id)}
          />
        ))}

      {/* 현재 진행중인 여행 */}
      {currentTravel ? (
        <TravelCard
          travel={currentTravel}
          travelStatus="ongoing"
          onClick={() => clickTravelHandler(currentTravel.travel_id)}
        />
      ) : (
        <EmptyCard />
      )}

      {/* 완료된 여행들 */}
      {completedTravels &&
        completedTravels.map((travel) => (
          <TravelCard
            key={travel.travel_id}
            travel={travel}
            travelStatus="completed"
            onClick={() => clickTravelHandler(travel.travel_id)}
          />
        ))}

      <CreateTravelButton
        navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/travels/create' }}
      />
    </div>
  );
});
