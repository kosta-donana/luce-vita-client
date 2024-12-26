import { faLeftLong, faUser } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';
import { TravelBasics } from '../components/travel-detail/TravelBasics';
import { TravelBudget } from '../components/travel-detail/TravelBudget';
import { FullWidthButton } from '../components/common/FullWidthButton';

export const TravelDetail = withNavigation(() => {
  return (
    <div className="p-6 bg-primary-100 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-neutral-600"
        title="여행 내용"
        titleColor="text-neutral-50"
      />
      {/* 기본 정보 */}
      <TravelBasics
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
      <TravelBudget currency="KRW" total={1000000} spent={300000} />
      {/* 수정 버튼 */}
      <FullWidthButton
        type="button"
        margin="my-8"
        bgColor="bg-secondary-400"
        textColor="text-white"
      >
        여행 수정하러 가기
      </FullWidthButton>
      {/* 일정 목록 */}
    </div>
  );
});
