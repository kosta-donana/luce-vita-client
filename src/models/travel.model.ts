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
