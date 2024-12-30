import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faLeftLong, faHouse } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { requestLogout } from '../api/login';
import { MainWrapper, TopNav, FullWidthButton as Button } from '../components/common';
import { UserInfo } from '../components/mypage/UserInfo';

function assignGoogle() {
  location.assign('https://www.google.com/');
}

export const MyPage = withNavigation(() => {
  const navigate = useNavigate();

  /**
   * 로그아웃 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  function logout() {
    requestLogout().then((result) => {
      switch (result) {
        case 'timeout':
          alert(
            '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
          );
          break;
        case 'succeed':
          assignGoogle();
          break;
        case 'expired':
          navigate('/login');
          break;
        case 'error':
          alert('서버 오류가 발생하였습니다.');
          break;
      }
    });
  }

  /**
   * 회원탈퇴 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  async function deactivate() {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/deactivate`);

      if (response.data.success) {
        assignGoogle();
      } else {
        console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate('/login');
        } else if (error.code === 'ECONNABORTED') {
          alert(
            '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
          );
        } else {
          console.log(
            'Axios 요청 과정에서 오류가 발생하였습니다. 더욱 자세한 정보를 얻으려면 API 명세를 확인해주세요.'
          );
        }

        return;
      }

      console.log('서버로의 요청에 실패하였습니다.');
    }
  }

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
        <Button
          type="button"
          margins="mx-2.5"
          bgColor="bg-primary-400"
          textColor="text-white"
          handleClick={logout}
        >
          로그아웃
        </Button>
        <Button
          type="button"
          margins="mx-2.5"
          bgColor="bg-neutral-300"
          textColor="text-neutral-600"
          handleClick={deactivate}
        >
          회원탈퇴
        </Button>
      </div>
    </MainWrapper>
  );
});
