import { faLeftLong, faHouse } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';

export const MyPage = withNavigation(() => {
  return (
    <div className="p-6 bg-primary-100 min-h-full">
      {/* 상단 내비게이션 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          { id: faHouse, title: '홈 화면으로 이동하기', route: '/' },
        ]}
        bgColor="bg-primary-400"
        iconColor="text-primary-200"
        title="마이페이지"
        titleColor="text-primary-100"
      />
    </div>
  );
});
