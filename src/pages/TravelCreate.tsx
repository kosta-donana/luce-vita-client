import { faLeftLong, faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';

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
    </div>
  );
});
