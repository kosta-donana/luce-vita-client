import TopNav from '../components/common/TopNav';
import TravelBasics from '../components/travel-detail/TravelBasics';
import { faLeftLong, faUser } from '@fortawesome/free-solid-svg-icons';

export function TravelDetail() {
  function doNothing() {
    // TODO: 임시 함수 대체하기
    return;
  }

  return (
    <div className="p-6 bg-primary-100">
      {/* 내비게이션 */}
      <TopNav
        iconInfos={[
          { id: faLeftLong, onClickHandler: doNothing, title: '이전 화면으로 되돌아가기' },
          { id: faUser, onClickHandler: doNothing, title: '마이페이지로 이동하기' },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-neutral-600"
        title="여행 내용"
        titleColor="text-white"
      />
      {/* 기본 정보 */}
      <TravelBasics
        titleColor="text-primary-100"
        title="null"
        startdate="24/10/22"
        enddate="24/11/07"
        country={{ countryname: 'null', currency: 'GBP' }}
        localname="런던"
        address="Town Hall Albert Square Manchester M60 2LA United Kingdom"
        memo="이런&#13;&#10;저런&#13;&#10;메모들.."
        tags={[]}
      />
      {/* 예산 정보 */}
      {/* 수정 버튼 */}
      {/* 일정 목록 */}
    </div>
  );
}
