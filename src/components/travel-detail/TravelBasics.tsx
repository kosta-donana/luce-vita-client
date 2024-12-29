import { TravelBasicsArticle } from './TravelBasicsArticle';

type TravelBasicsProps = {
  travelTitle: string;
  startDate: string;
  endDate: string;
  countryName: string;
  localName: string;
  address: string;
  memo: string;
};

export const TravelBasics: React.FC<TravelBasicsProps> = (props) => {
  return (
    <section className="mt-8 pl-5 pr-24 py-6 bg-primary-300 text-white rounded-2xl shadow-md">
      <TravelBasicsArticle fontSize="text-4xl" title="여행 제목">
        {props.travelTitle}
      </TravelBasicsArticle>
      <TravelBasicsArticle margins="mt-6" fontSize="text-3xl" title="날짜">
        {`${props.startDate} - ${props.endDate}`}
      </TravelBasicsArticle>
      <TravelBasicsArticle margins="mt-6" fontSize="text-3xl" title="국가 및 장소">
        {props.countryName}
        <br />
        {props.localName}
      </TravelBasicsArticle>
      <TravelBasicsArticle margins="mt-6" fontSize="text-2xl" title="숙소 정보">
        {props.address}
      </TravelBasicsArticle>
      <TravelBasicsArticle margins="mt-6" fontSize="text-xl" title="메모">
        <textarea
          className="p-2.5 w-full text-neutral-700 rounded-xl border-2 border-primary-100"
          rows={5}
          defaultValue={props.memo}
          readOnly
        />
      </TravelBasicsArticle>
    </section>
  );
};
