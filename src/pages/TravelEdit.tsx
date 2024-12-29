import { useParams } from 'react-router-dom';
import { faLeftLong, faUser } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { MainWrapper, TopNav } from '../components/common';

export const TravelEdit = withNavigation(() => {
  const { id } = useParams();

  let isSaving = false;

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
    </MainWrapper>
  );
});
