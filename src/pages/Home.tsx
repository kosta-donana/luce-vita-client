import { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { faUser, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Travel } from '../models/travel.model';
import {
  MainWrapper,
  TopNav,
  FloatingNavButton as CreateTravelButton,
  TravelCard,
  EmptyCard,
} from '../components/common';
import { StatusCard } from '../components/home';

const rootEl = document.getElementById('root')!;

export const Home = withNavigation(() => {
  const navigate = useNavigate();
  const [currentTravels, setCurrentTravels] = useState<Travel[] | null>(null);
  const [upcomingTravels, setUpcomingTravels] = useState<Travel[] | null>(null);
  const [top, setTop] = useState<string>(
    parseInt(rootEl.style.height) -
      8 * (Math.round(16 * Math.cbrt(parseInt(rootEl.style.width) / 1440) * 100) / 100) +
      'px'
  );

  const { data: queryData } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/travels`);
      return result;
    },
  });

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
      console.log('queryData:', queryData);
      const { ongoingTravels: ongoings, upcomingTravels: upcomings } = queryData.data.data;
      if (ongoings.length === 0) {
        if (upcomings.length === 0) {
          setCurrentTravels(null);
          setUpcomingTravels(null);
        } else if (upcomings.length === 1) {
          setCurrentTravels(upcomings);
          setUpcomingTravels(null);
        } else if (upcomings.length >= 2) {
          setCurrentTravels([upcomings[0]]);
          setUpcomingTravels(upcomings.slice(1));
        }
      } else if (ongoings.length === 1) {
        if (upcomings.length === 0) {
          setCurrentTravels(ongoings);
          setUpcomingTravels(null);
        } else if (upcomings.length === 1) {
          setCurrentTravels(ongoings);
          setUpcomingTravels(upcomings);
        } else if (upcomings.length >= 2) {
          setCurrentTravels(ongoings);
          setUpcomingTravels(upcomings);
        }
      } else if (ongoings.length >= 2) {
        if (upcomings.length === 0) {
          setCurrentTravels(ongoings);
          setUpcomingTravels(null);
        } else if (upcomings.length === 1) {
          setCurrentTravels(ongoings);
          setUpcomingTravels(upcomings);
        } else if (upcomings.length >= 2) {
          setCurrentTravels(ongoings);
          setUpcomingTravels(upcomings);
        }
      }
    }
  }, [queryData, currentTravels]);

  return (
    <MainWrapper position="relative" paddings="p-6" bgColor="bg-primary-100">
      {/* 내비게이션 바 */}
      <div className="absolute pr-12 w-full">
        <TopNav
          navIconInfos={[
            {
              id: faGlobe,
              title: '커뮤니티로 이동하기',
              route: 0,
              handleClick: () => {
                alert('커뮤니티 기능은 추후에 도입될 예정입니다.');
              },
            },
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
      {currentTravels ? (
        <StatusCard startDate={currentTravels[0].start_date} endDate={currentTravels[0].end_date} />
      ) : (
        <StatusCard startDate={'1999-01-01'} endDate={'1999-12-31'} />
      )}

      {/* 현재 진행중인 여행들이나 예정된 여행들 */}
      {currentTravels?.map((travel, i) => (
        <TravelCard
          key={i}
          travel={travel}
          travelStatus="ongoing"
          onClickHandler={() => {
            navigate('/travels');
          }}
        />
      ))}

      {currentTravels?.length === 0 && upcomingTravels?.length === 0 && <EmptyCard />}

      {/* 예정된 여행들*/}
      {upcomingTravels?.map((travel) => (
        <TravelCard
          key={travel.travel_id}
          travel={travel}
          travelStatus=""
          onClickHandler={() => {
            navigate('/travels');
          }}
        />
      ))}
    </MainWrapper>
  );
});
