import { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { faHouse, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
import {
  MainWrapper,
  TopNav,
  FloatingNavButton as CreateTravelButton,
  TravelCard,
  EmptyCard,
} from '../components/common';

const rootEl = document.getElementById('root')!;

export const Travels = withNavigation(() => {
  const navigate = useNavigate();
  const [currentTravel, setCurrentTravel] = useState<Travel | null>(null);
  const [upcomingTravels, setUpcomingTravels] = useState<Travel[] | null>(null);
  const [completedTravels, setCompletedTravels] = useState<Travel[] | null>(null);
  const [top, setTop] = useState<string>(
    parseInt(rootEl.style.height) -
      8 * (Math.round(16 * Math.cbrt(parseInt(rootEl.style.width) / 1440) * 100) / 100) +
      'px'
  );

  const { data: queryData } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await axios.get(`${import.meta.env.VITE_VERCEL_API_BASE_URL}/travels`);
      return result;
    },
  });

  useLayoutEffect(() => {
    let timeoutId = 0;
    function debounceSetTop() {
      if (timeoutId !== 0) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
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
      const { ongoingTravels, upcomingTravels, completedTravels } = queryData.data.data;
      if (ongoingTravels.length > 0 && upcomingTravels.length >= 0) {
        setCurrentTravel(ongoingTravels[0]);
        setUpcomingTravels(upcomingTravels);
      } else if (ongoingTravels.length === 0 && upcomingTravels.length === 1) {
        setCurrentTravel(upcomingTravels[0]);
        setUpcomingTravels(null);
      } else if (ongoingTravels.length === 0 && upcomingTravels.length >= 2) {
        setCurrentTravel(upcomingTravels.slice(0, 1));
        setUpcomingTravels(upcomingTravels.slice(1));
      } else {
        setCurrentTravel(null);
        setUpcomingTravels(null);
      }
      if (completedTravels.length > 0) {
        setCompletedTravels(completedTravels);
      }
    }
  }, [queryData]);

  return (
    <MainWrapper position="relative" paddings="p-6" bgColor="bg-primary-100">
      {/* 내비게이션 바 */}
      <div className="absolute pr-12 w-full">
        <TopNav
          navIconInfos={[
            { id: faHouse, title: '홈으로 이동하기', route: '/' },
            { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
          ]}
          bgColor="bg-primary-400"
          iconColor="text-primary-200"
          title="나의 여행 목록"
          titleColor="text-primary-100"
        />
      </div>

      {/* 여행 생성 버튼 */}
      <CreateTravelButton
        navIconInfo={{ id: faPlus, title: '새로운 여행 추가하기', route: '/travels/create' }}
        top={top}
      />

      {/* 예정된 여행들 */}
      {upcomingTravels?.map((travel) => (
        <TravelCard
          key={travel.travel_id}
          travel={travel}
          travelStatus="upcoming"
          onClickHandler={() => {
            navigate(`/travels/${travel.travel_id}`);
          }}
        />
      ))}

      {/* 현재 진행중인 여행 */}
      {currentTravel ? (
        <TravelCard
          travel={currentTravel}
          travelStatus="ongoing"
          onClickHandler={() => navigate(`/travels/${currentTravel.travel_id}`)}
        />
      ) : (
        <EmptyCard />
      )}

      {/* 완료된 여행들 */}
      {completedTravels?.map((travel) => (
        <TravelCard
          key={travel.travel_id}
          travel={travel}
          travelStatus="completed"
          onClickHandler={() => {
            navigate(`/travels/${travel.travel_id}`);
          }}
        />
      ))}
    </MainWrapper>
  );
});
