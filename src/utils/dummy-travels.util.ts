import { Travel } from '../models/travel.model';

export const dummyTravels: Array<Travel> = [
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
