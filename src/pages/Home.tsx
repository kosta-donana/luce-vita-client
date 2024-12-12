import { useState } from 'react';
import { TravelStatus } from '../components/home/TravelStatus';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';
import { Header } from '../components/home/Header';
import { CreateTravelButton } from '../components/home/CreateTravelButton';

export interface Travel {
  travelid: number;
  userid: string;
  countryno: number;
  title: string;
  startdate: string;
  enddate: string;
  localname: string;
  address: string;
  travelimg: string;
  budgettotal: number;
  tag: string; // tags 아닌가 ?
  memo: string;
}

const initialTravels: Array<Travel> = [
  {
    travelid: 11,
    userid: '10dhdof03hd9dh',
    countryno: 111,
    title: '제목이다이것이',
    startdate: '1202',
    enddate: '1207',
    localname: '금천구',
    address: '자세한주소인것임',
    travelimg: 'https://??????',
    budgettotal: 110000,
    tag: '태그1',
    memo: '메모별것도없네이거',
  },
  {
    travelid: 22,
    userid: '32dkch109fbos6',
    countryno: 222,
    title: '이것도여행인것인거임',
    startdate: '1209',
    enddate: '1214',
    localname: '디지털단지',
    address: '호서호서호서호서구내식당당',
    travelimg: 'https://!!!!!!',
    budgettotal: 220000,
    tag: '태그2',
    memo: '메모를쓰지않은것이냐어째서',
  },
];

export function Home() {
  const [travels] = useState<Array<Travel>>(initialTravels);
  // const [travels] = useState<Array<Travel>>([]);

  return (
    <div className="relative p-6 flex flex-col gap-4">
      <Header />
      <TravelStatus />
      {travels.length > 0 ? (
        travels.map((travel) => <TravelCard key={travel.travelid} travel={travel} />)
      ) : (
        <TravelEmpty />
      )}
      <CreateTravelButton />
    </div>
  );
}
