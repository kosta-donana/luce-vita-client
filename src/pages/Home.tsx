import { useNavigate } from 'react-router-dom';
import { useState, useLayoutEffect, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { faHouseFlag, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
// import { dummyTravels } from '../utils/dummy-travels.util';
import { TopNav } from '../components/common/TopNav';
import { FloatingNavButton as CreateTravelButton } from '../components/common/FloatingNavButton';
import { StatusCard } from '../components/home/StatusCard';
import { TravelCard } from '../components/home/TravelCard';
import { EmptyCard } from '../components/home/EmptyCard';
import { MainWrapper } from '../components/common/MainWrapper';

const rootEl = document.getElementById('root')!;

export const Home = withNavigation(() => {
  const navigate = useNavigate();
  const [currentTravel, setCurrentTravel] = useState<Travel | null>(null);
  const [upcomingTravels, setUpcomingTravels] = useState<Travel[] | null>(null);
  // const [travels, setTravels] = useState<Travel[]>(dummyTravels);
  const [top, setTop] = useState<string>(
    parseInt(rootEl.style.height) -
      8 * (Math.round(16 * Math.cbrt(parseInt(rootEl.style.width) / 1440) * 100) / 100) +
      'px'
  );
  const { data: queryData } = useQuery({
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

  useLayoutEffect(() => {
    let timeoutId = 0;
    function debounceSetTop() {
      if (timeoutId !== 0) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setTop(
          parseInt(rootEl.style.height) -
            8 * (Math.round(16 * Math.cbrt(parseInt(rootEl.style.width) / 1440) * 100) / 100) +
            'px'
        );
      }, 250);
    }

    window.addEventListener('resize', debounceSetTop);
    screen.orientation.addEventListener('change', debounceSetTop);

    return () => {
      window.removeEventListener('resize', debounceSetTop);
      screen.orientation.removeEventListener('change', debounceSetTop);
    };
  }, []);

  useEffect(() => {
    if (queryData) {
      const { ongoingTravels, upcomingTravels } = queryData.data.data;
      if (ongoingTravels.length > 0 && upcomingTravels.length > 0) {
        console.log(upcomingTravels);
        setCurrentTravel(ongoingTravels[0]);
        setUpcomingTravels(upcomingTravels.toReversed());
      } else if (ongoingTravels.length === 0 && upcomingTravels.length === 1) {
        setCurrentTravel(upcomingTravels[0]);
        setUpcomingTravels(null);
      } else if (ongoingTravels.length === 0 && upcomingTravels.length >= 2) {
        setCurrentTravel(upcomingTravels.toReversed().slice(0, 1));
        setUpcomingTravels(upcomingTravels.toReversed().slice(1));
      } else {
        setCurrentTravel(null);
        setUpcomingTravels(null);
      }
    }
  }, [queryData]);

  return (
    <MainWrapper>
      {/* 내비게이션 바 */}
      <div className="absolute pr-12 w-full">
        <TopNav
          navIconInfos={[
            { id: faHouseFlag, title: '커뮤니티로 이동하기', route: '/community' },
            { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
          ]}
          bgColor="bg-primary-100"
          iconColor="text-primary-300"
          title="Luce Vita"
          titleColor="text-slate-700"
        />
      </div>
      {/* 여행 생성 버튼 */}
      <CreateTravelButton
        navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/travels/create' }}
        top={top}
      />
      {/* 여행 상태 캘린더 */}
      {currentTravel ? (
        <StatusCard startDate={currentTravel.start_date} endDate={currentTravel.end_date} />
      ) : (
        <StatusCard startDate={'1999-01-01'} endDate={'1999-12-31'} />
      )}
      {/* 현재 진행중인 여행 */}
      {currentTravel ? (
        <TravelCard
          travel={currentTravel}
          travelStatus="ongoing"
          onClickHandler={clickTravelHandler}
        />
      ) : (
        <EmptyCard />
      )}
      {/* 예정된 여행들*/}
      {upcomingTravels?.map((travel) => (
        <TravelCard
          key={travel.travel_id}
          travel={travel}
          travelStatus=""
          onClickHandler={clickTravelHandler}
        />
      ))}
    </MainWrapper>
  );
});
