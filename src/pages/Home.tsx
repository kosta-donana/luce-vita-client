import { useState } from 'react';
import { TravelStatus } from '../components/home/TravelStatus';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';
import { Header } from '../components/home/Header';
import FloatingButton from '../components/common/FloatingButton';
import { Travel } from '../models/travel.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

export function Home() {
  const [travels] = useState<Array<Travel>>(dummyTravels);
  // const [travels] = useState<Array<Travel>>([]);

  return (
    <>
      <div className="p-6 flex flex-col gap-4">
        <Header />
        <TravelStatus />
        {travels.length > 0 ? (
          travels.map((travel) => <TravelCard key={travel.travelid} travel={travel} />)
        ) : (
          <TravelEmpty />
        )}
      </div>
      <FloatingButton
        iconInfo={{ id: faPlus, onClickHandler: () => {}, title: '새로운 여행 추가하기' }}
      />
    </>
  );
}
