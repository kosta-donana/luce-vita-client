import { faLeftLong, faHouse } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { MainWrapper, TopNav, FullWidthButton as Button } from '../components/common';
import { UserInfo } from '../components/mypage/UserInfo';

export const MyPage = withNavigation(() => {
  return (
    <MainWrapper paddings="p-6" bgColor="bg-primary-100">
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
      <UserInfo nickname="" />
      <div className="mt-16 flex gap-x-2.5">
        <Button type="button" margins="mx-2.5" bgColor="bg-primary-400" textColor="text-white">
          로그아웃
        </Button>
        <Button
          type="button"
          margins="mx-2.5"
          bgColor="bg-neutral-300"
          textColor="text-neutral-600"
        >
          회원탈퇴
        </Button>
      </div>
    </MainWrapper>
  );
});
