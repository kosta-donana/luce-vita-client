import { faLeftLong, faUser } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { TopNav } from '../components/common/TopNav';

export const Todo = withNavigation(() => {
  return (
    <div className="p-6 bg-primary-100 min-h-full flex flex-col gap-5">
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/' },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-neutral-600"
        title="일정 상세"
        titleColor="text-neutral-50"
      />
    </div>
  );
});
