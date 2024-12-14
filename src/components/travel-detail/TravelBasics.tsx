import TravelArticle from '../common/TravelArticle';

type TravelBasicsProps = {
  titleColor: string;
  title: string;
  startdate: string;
  enddate: string;
  country: {
    countryname: string;
    currency: string;
  };
  localname: string;
  address: string;
  memo: string;
  tags: string[];
};

const TravelBasics: React.FC<TravelBasicsProps> = (props) => {
  const titleColor = props.titleColor;

  return (
    <section className="mt-8 pl-5 pr-24 py-6 bg-primary-300 text-white rounded-2xl">
      <TravelArticle fontSize="text-4xl" title="여행 제목" titleColor={titleColor}>
        {props.title}
      </TravelArticle>
      <TravelArticle margin="mt-6" fontSize="text-3xl" title="날짜" titleColor={titleColor}>
        {`${props.startdate} - ${props.enddate}`}
      </TravelArticle>
      <TravelArticle margin="mt-6" fontSize="text-3xl" title="국가 및 장소" titleColor={titleColor}>
        {props.country.countryname}
        <br />
        {props.localname}
      </TravelArticle>
      <TravelArticle margin="mt-6" fontSize="text-2xl" title="숙소 정보" titleColor={titleColor}>
        {props.address}
      </TravelArticle>
      <TravelArticle margin="mt-6" fontSize="text-xl" title="메모" titleColor={titleColor}>
        <textarea
          id="memo"
          className="p-2.5 w-full text-neutral-700 rounded-xl border-2 border-primary-100"
          rows={5}
          readOnly
        >
          {props.memo}
        </textarea>
      </TravelArticle>
    </section>
  );
};

export default TravelBasics;
