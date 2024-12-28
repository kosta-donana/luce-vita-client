import { useState, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import { faLeftLong, faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';
import { InputItem } from '../components/travel-create/InputItem';
import { Country } from '../models/country.model';

export const TravelCreate = withNavigation(() => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currencyUnit, setCurrencyUnit] = useState<string>('화폐 단위');

  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/countries`)
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**
   * 새로운 여행 추가하기 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  function handleClick() {
    formRef.current!.requestSubmit();
  }

  /**
   * 새로운 여행 추가하기 버튼을 클릭해서 폼이 제출되었을 때의 동작을 정의하는 함수입니다.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(formRef.current!);
    const travelTitle: string = formData.get('travelTitle')!.toString();
    const startDate: string = formData.get('startDate')!.toString();
    const endDate: string = formData.get('endDate')!.toString();
    // 시작 날짜 및 종료 날짜 유효성 검사하기
    if (startDate > endDate) {
      alert('시작 날짜가 종료 날짜 이후로 입력되었습니다. 입력된 일정을 확인해주세요.');
      return;
    }

    const countryNo: number = Number(formData.get('countryNo')!.toString());
    const localName: string = formData.get('localName')!.toString();
    const address = formData.get('address')!.toString();
    const budgetTotal: number = Number(formData.get('budgetTotal')!.toString());
    const tags = ['여행', '태그', '힐링']; // 임시로 설정한 태그 배열입니다.
    // TODO: 태그 등록 기능 구현하기

    // 줄 바꿈 문자 치환하기
    const memo: string = formData.get('memo')!.toString().replace(/\n\r?/g, '&#13;&#10;');
  }

  return (
    <div className="p-6 bg-primary-400 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          { id: faPlaneCircleCheck, title: '새로운 여행 추가하기', route: 0, handleClick },
        ]}
        bgColor="bg-primary-100"
        iconColor="text-primary-300"
        title="새로운 여행 추가"
        titleColor="text-slate-700"
      />
      <form ref={formRef} className="mt-9" method="post" onSubmit={handleSubmit}>
        {/* 여행 제목 입력란 */}
        <InputItem
          required
          type="text"
          name="travelTitle"
          placeholder="여행의 제목을 입력해주세요"
          title="여행 제목"
        />
        <div className="flex gap-7">
          {/* 시작 날짜 입력란 */}
          <InputItem required type="date" name="startDate" title="시작 날짜" />
          {/* 종료 날짜 입력란 */}
          <InputItem required type="date" name="endDate" title="종료 날짜" />
        </div>
        <h1 className="mt-4 mb-2.5 text-primary-100 text-lg">국가 선택</h1>
        {/* 국가 선택란 */}
        <select
          required
          name="countryNo"
          className="px-[1.11rem] py-3.5 w-7/12 text-gray-700 text-2xl rounded-2xl border-2 border-primary-200 focus:border-secondary-300"
          onChange={(event) => {
            const countryNo = Number(event.target.value);
            setCurrencyUnit(
              countries.find((country) => country.country_no === countryNo)?.currency ?? '화폐 단위'
            );
          }}
        >
          <option value="">여행하실 국가를 선택해주세요</option>
          {countries.map((country) => (
            <option value={country.country_no}>{country.country_name}</option>
          ))}
        </select>
        {/* 장소 입력란 */}
        <InputItem
          required
          margin="mr-40"
          type="text"
          name="localName"
          placeholder="여행 장소를 입력해주세요"
          title="여행 장소"
        />
        {/* 숙소 입력란 */}
        <InputItem margin="mr-20" type="text" name="address" title="숙소 주소" />
        {/* 총 예산 입력란 */}
        <InputItem
          required
          margin="mr-40"
          type="number"
          name="budgetTotal"
          title={`총 예산 (${currencyUnit})`}
        />
        <h1 className="mt-4 mb-2.5 text-primary-100 text-lg">메모</h1>
        {/* 메모 입력란 */}
        <textarea
          name="memo"
          className="p-2.5 w-2/3 text-gray-700 text-xl rounded-xl border-2 border-primary-100 border-primary-200 focus:border-secondary-300"
          rows={7}
        />
      </form>
    </div>
  );
});
