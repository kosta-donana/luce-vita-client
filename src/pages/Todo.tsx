import { TopNav } from '../components/common/TopNav';
import { faAngleLeft, faUser } from '@fortawesome/free-solid-svg-icons';

export function Todo() {
  return (
    <div className="p-6 bg-primary-100 min-h-full flex flex-col gap-5">
      <TopNav
        navIconInfos={[
          { id: faAngleLeft, title: '커뮤니티 기능으로 임시 이동하기', route: '/' },
          { id: faUser, title: '마이페이지로 이동하기', route: '/' },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-gray-600"
        title="일정 상세"
        titleColor="text-white"
      />
    </div>
  );
}
