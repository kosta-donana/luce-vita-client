/**
 * 여행 관련 데이터 모델(타입)들을 정의하고 있는 파일입니다.
 */

export type Travel = {
  travel_id: string;
  travel_title: string;
  country_no: number;
  local_name: string;
  start_date: string;
  end_date: string;
  address: string;
  travel_img: string;
  budget_total: number;
  memo: string;
  tags: string[];
  country: {
    country_name: string;
    currency: string;
  };
};

export type Budget = {
  schedule_date: string;
  budget: number;
};

export type TopSchedule = {
  schedule_date: string;
  schedule_content: string;
};
