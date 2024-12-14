/**
 * 여행 관련 데이터 모델(타입)들을 정의하고 있는 파일입니다.
 */

export type Travel = {
  travelid: number;
  userid: string;
  country: {
    countryname: string;
    currency: string;
  };
  title: string;
  startdate: string;
  enddate: string;
  localname: string;
  address: string;
  travelimg: string;
  budgettotal: number;
  tags: string[];
  memo: string;
};
