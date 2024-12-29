/**
 * 여행 관련 데이터 모델(타입)들을 정의하고 있는 파일입니다.
 */

export type Travel = {
  travel_id: number;
  user_id: string;
  country: {
    country_name: string;
    currency: string;
  };
  country_no: number;
  travel_title: string;
  start_date: string;
  end_date: string;
  local_name: string;
  address: string;
  travel_img: string;
  budget_total: number;
  tags: string[];
  memo: string;
};

export type Budget = {
  schedule_date: string;
  budget: number;
};
