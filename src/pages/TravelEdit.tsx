import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { faLeftLong, faUser } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { Country } from '../models/country.model';
import { Travel } from '../models/travel.model';
import { MainWrapper, TopNav, HalfWidthButton as Button } from '../components/common';
import { InputItem } from '../components/travel-edit/InputItem';

export const TravelEdit = withNavigation(() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [countries, setCountries] = useState<Country[]>([]);
  const [currencyUnit, setCurrencyUnit] = useState<string>('화폐 단위');

  const isInitial = useRef<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);
  const travelTitleRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const countryNoRef = useRef<HTMLSelectElement>(null);
  const localNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const budgetTotalRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  let isSubmitting = false;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/countries`)
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/travels/${id}`)
      .then((response) => {
        const travel: Travel = response.data.data[0];
        travelTitleRef.current!.value = travel.travel_title;
        travelTitleRef.current!.disabled = false;
        startDateRef.current!.value = travel.start_date;
        startDateRef.current!.disabled = false;
        endDateRef.current!.value = travel.end_date;
        endDateRef.current!.disabled = false;
        countryNoRef.current!.value = travel.country_no.toString();
        countryNoRef.current!.disabled = false;
        setCurrencyUnit(
          countries.find((country) => country.country_no === travel.country_no)!.currency
        );
        localNameRef.current!.value = travel.local_name;
        localNameRef.current!.disabled = false;
        addressRef.current!.value = travel.address;
        addressRef.current!.disabled = false;
        budgetTotalRef.current!.value = travel.budget_total.toString();
        budgetTotalRef.current!.disabled = false;
        memoRef.current!.value = travel.memo;
        memoRef.current!.disabled = false;
        buttonRef.current!.disabled = false;
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          alert(
            '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
          );
          return;
        }

        console.log('서버로의 요청에 실패하였습니다.');
      });
  }, [countries, id]);

  /**
   * 여행 저장하기 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (isSubmitting) return;

    isSubmitting = true;
    event.preventDefault();
  }

  return (
    <MainWrapper paddings="p-6" bgColor="bg-primary-100">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-neutral-600"
        title="여행 수정하기"
        titleColor="text-neutral-50"
      />
      <form ref={formRef} className="mt-5" method="post" onSubmit={handleSubmit}>
        {/* 여행 제목 입력란 */}
        <InputItem
          required
          ref={travelTitleRef}
          type="text"
          name="travelTitle"
          placeholder="여행의 제목을 입력해주세요"
          title="여행 제목"
          disabled
        />
        <div className="flex gap-7">
          {/* 시작 날짜 입력란 */}
          <InputItem
            required
            ref={startDateRef}
            type="date"
            name="startDate"
            title="시작 날짜"
            disabled
          />
          {/* 종료 날짜 입력란 */}
          <InputItem
            required
            ref={endDateRef}
            type="date"
            name="endDate"
            title="종료 날짜"
            disabled
          />
        </div>
        <h1 className="mt-2.5 mb-2 text-neutral-500 text-lg">국가 선택</h1>
        {/* 국가 선택란 */}
        <select
          required
          ref={countryNoRef}
          name="countryNo"
          className="appearance-none px-[1.11rem] py-3.5 w-7/12 text-gray-700 text-2xl rounded-2xl border-2 border-primary-300 focus:border-secondary-400"
          onChange={(event) => {
            const countryNo = Number(event.target.value);
            setCurrencyUnit(
              countries.find((country) => country.country_no === countryNo)?.currency ?? '화폐 단위'
            );
          }}
          disabled
        >
          <option value="">여행하실 국가를 선택해주세요</option>
          {countries.map((country) => (
            <option value={country.country_no}>{country.country_name}</option>
          ))}
        </select>
        {/* 장소 입력란 */}
        <InputItem
          required
          ref={localNameRef}
          margins="mr-40"
          type="text"
          name="localName"
          placeholder="여행 장소를 입력해주세요"
          title="여행 장소"
          disabled
        />
        {/* 숙소 입력란 */}
        <InputItem
          ref={addressRef}
          margins="mr-20"
          type="text"
          name="address"
          title="숙소 주소"
          disabled
        />
        {/* 총 예산 입력란 */}
        <InputItem
          required
          ref={budgetTotalRef}
          margins="mr-40"
          type="number"
          name="budgetTotal"
          title={`총 예산 (${currencyUnit})`}
          disabled
        />
        <h1 className="mt-2.5 mb-2 text-neutral-500 text-lg">메모</h1>
        {/* 메모 입력란 */}
        <textarea
          ref={memoRef}
          name="memo"
          className="p-2.5 w-2/3 text-gray-700 text-xl rounded-xl border-2 border-primary-300 focus:border-secondary-400"
          rows={7}
          disabled
        />
        <Button
          ref={buttonRef}
          type="submit"
          margins="mt-6"
          bgColor="bg-primary-400"
          textColor="text-white"
          disabled
        >
          저장하기
        </Button>
      </form>
    </MainWrapper>
  );
});
