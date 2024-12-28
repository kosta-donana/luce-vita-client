import { useNavigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { withNavigation } from './withNavigation';
import { VerificationStatus, verifyEmail } from '../api/sign-up';
import { InputItem } from '../components/signup/InputItem';
import { FullWidthButton as Button } from '../components/common/FullWidthButton';

export const EmailVerification = withNavigation(() => {
  const [navigate, location] = [useNavigate(), useLocation()];

  const authTokenRef = useRef<HTMLInputElement>(null);

  let isSubmitting: boolean = false;

  /**
   * 회원가입 완료하기 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (isSubmitting) return;

    isSubmitting = true;
    event.preventDefault();

    const status: VerificationStatus = await verifyEmail(
      location.state?.email,
      authTokenRef.current!.value
    );
    switch (status) {
      case 'timeout':
        alert(
          '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
        );
        break;
      case 'verified':
        alert('회원가입이 모두 완료되었습니다.');
        if (sessionStorage?.getItem('backCount')) {
          navigate(-(Number(sessionStorage?.getItem('backCount')) + 1));
        } else {
          navigate('/');
        }
        break;
      case 'failed':
        alert('인증에 실패하였습니다.');
        break;
      case 'error':
        alert('서버 오류가 발생하였습니다.');
        break;
    }

    isSubmitting = false;
  }

  return (
    <div className="px-10 py-16 bg-primary-400 min-h-full">
      {/* 제목 */}
      <h1 className="text-slate-50 text-5xl font-medium">이메일 인증</h1>
      <form className="mt-16" method="post" onSubmit={handleSubmit}>
        {/* 인증번호 입력란 */}
        <InputItem ref={authTokenRef} required type="text" name="authToken" title="인증번호 확인" />
        <Button type="submit" margin="mt-36" bgColor="bg-slate-200" textColor="text-slate-600">
          인증하고 회원가입 완료하기
        </Button>
      </form>
    </div>
  );
});
