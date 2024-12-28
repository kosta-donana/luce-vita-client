import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { faLeftLong, faTrash } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';
import { TravelBasics } from '../components/travel-detail/TravelBasics';
import { TravelBudget } from '../components/travel-detail/TravelBudget';
import { FullWidthButton } from '../components/common/FullWidthButton';

export const TravelDetail = withNavigation(() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [travelTitle, setTravelTitle] = useState<string>('-');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('-');
  const [currencyUnit, setCurrencyUnit] = useState<string>('');
  const [localName, setLocalName] = useState<string>('-');
  const [address, setAddress] = useState<string>('');
  const [memo, setMemo] = useState<string>('');

  let isDeleting = false;

  useEffect(() => {}, []);

  /**
   * 여행 삭제하기 버튼을 클릭했을 때의 동작을 정의하는 함수이다.
   */
  function deleteTravel() {
    if (isDeleting) return;

    isDeleting = true;

    axios
      .delete(`${import.meta.env.VITE_API_BASE_URL}/travels/${id}`)
      .then((response) => {
        if (response.data.success) {
          alert('여행이 성공적으로 삭제되었습니다.');
          navigate(-1);
        } else {
          console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
        }
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          alert(
            '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
          );
        } else {
          alert('서버 오류가 발생하였습니다.');
        }
      })
      .finally(() => {
        isDeleting = false;
      });
  }

  return (
    <div className="p-6 bg-primary-100 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          {
            id: faTrash,
            title: '여행 삭제하기',
            route: 0,
            handleClick: () => {
              if (confirm('정말로 삭제하실 건가요?')) {
                deleteTravel();
              }
            },
          },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-neutral-600"
        title="여행 내용"
        titleColor="text-neutral-50"
      />
      {/* 기본 정보 */}
      <TravelBasics
        travelTitle={travelTitle}
        startDate={startDate.replace('-', '/')}
        endDate={endDate.replace('-', '/')}
        countryName={countryName}
        localName={localName}
        address={address}
        memo={memo}
      />
      {/* 예산 정보 */}
      <TravelBudget currencyUnit={currencyUnit} total={1000000} spent={300000} />
      {/* 수정 버튼 */}
      <FullWidthButton
        type="button"
        margin="my-7"
        bgColor="bg-secondary-400"
        textColor="text-white"
      >
        여행 수정하러 가기
      </FullWidthButton>
      {/* 일정 목록 */}
      <section className="pl-5 pr-24 py-6 bg-primary-300 rounded-2xl shadow-md">
        <h1 className="my-1 text-primary-100 text-lg">일정 목록</h1>
      </section>
    </div>
  );
});
