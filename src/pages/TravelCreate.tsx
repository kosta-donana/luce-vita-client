import { faLeftLong, faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';
import { InputItem } from '../components/travel-create/InputItem';

export const TravelCreate = withNavigation(() => {
  return (
    <div className="p-6 bg-primary-400 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          { id: faPlaneCircleCheck, title: '새로운 여행 추가하기', route: '/' },
        ]}
        bgColor="bg-primary-100"
        iconColor="text-primary-300"
        title="새로운 여행 추가"
        titleColor="text-slate-700"
      />
      {/* 여행 제목 입력란 */}
      <InputItem
        required
        margin="mt-9"
        type="text"
        name="title"
        placeholder="여행의 제목을 입력해주세요"
        title="여행 제목"
      />
      <div className="flex gap-7">
        {/* 시작 날짜 입력란 */}
        <InputItem required type="date" name="startDate" title="시작 날짜" />
        {/* 종료 날짜 입력란 */}
        <InputItem required type="date" name="endDate" title="종료 날짜" />
      </div>
      {/* 국가 선택란 */}
      <InputItem
        required
        margin="mr-80"
        type="text"
        name="country"
        placeholder="TODO: 선택란 구현하기"
        title="국가 선택"
      />
      {/* 총 예산 입력란 */}
      <InputItem required margin="mr-52" type="number" name="totalBudget" title="총 예산 ()" />
    </div>
  );
});
