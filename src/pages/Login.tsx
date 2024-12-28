import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { requestLogin } from '../api/login';
import { InputItem } from '../components/login/InputItem';
import { FullWidthButton as Button } from '../components/common/FullWidthButton';

export const Login = withNavigation(() => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  /**
   * 로그인하기 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    switch (await requestLogin(email, password)) {
      case 'timeout':
        alert(
          '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
        );
        break;
      case 'succeed':
        navigate(-1);
        break;
      case 'failed':
        alert('로그인에 실패하였습니다. 가입된 아이디(이메일)와 비밀번호를 정확히 입력해주세요.');
        break;
      case 'error':
        alert('서버 오류가 발생하였습니다.');
        break;
    }
  }

  return (
    <div className="px-16 py-20 bg-slate-200 min-h-full">
      {/* 제목 */}
      <h1 className="mt-20 text-primary-400 text-[4rem] font-semibold text-center">Luce Vita!</h1>
      {/* 소개글 */}
      <p className="my-16 text-primary-400 text-2xl/loose font-medium text-center">
        여러분의 삶 속에서 모든 여행을 함께하며
        <br />
        계획을 세우고, 일정과 예산을 관리하기 위한
        <br />
        서비스를 제공합니다.
      </p>
      <form className="mt-32" method="post" onSubmit={handleSubmit}>
        {/* 이메일 입력란 */}
        <InputItem ref={emailRef} required type="email" name="email" title="이메일" />
        {/* 비밀번호 입력란 */}
        <InputItem ref={passwordRef} required type="password" name="password" title="비밀번호" />
        <Button type="submit" margin="mt-14" bgColor="bg-primary-400" textColor="text-white">
          로그인하기
        </Button>
      </form>
      <div className="mt-3 text-gray-600 underline text-xl flex justify-between">
        <Link to="/signup">이메일로 회원가입하러 가기</Link>
        {/* <Link to="/">비밀번호 찾기</Link> */}
        {/* TODO: 비밀번호 찾기 기능 구현하기 */}
      </div>
      <div className="mt-9 flex gap-x-10">
        <Button type="button" bgColor="bg-[#ffce00]" textColor="text-[#1e1e1e]">
          <FontAwesomeIcon icon={faComment} size="2xl" title="카카오 로그인" />
        </Button>
        <Button type="button" bgColor="bg-white" textColor="text-black">
          <img src="/google.png" className="size-14" title="구글 로그인" alt="구글 로그인" />
        </Button>
      </div>
    </div>
  );
});
