import { useNavigate } from 'react-router-dom';
import { requestSignUp } from '../utils/auth.util';
import { InputItem } from '../components/signup/InputItem';
import { HalfWidthButton as Button } from '../components/common/HalfWidthButton';

export function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (requestSignUp() == 'success') {
      navigate('/');
    } else {
      // TODO: 에러 메시지 표시하기
    }
  };

  return (
    <div className="px-10 py-16 bg-primary-400 min-h-full">
      {/* 제목 */}
      <h1 className="text-slate-50 text-5xl font-medium">이메일 회원가입</h1>
      <form className="mt-16" method="post" onSubmit={handleSubmit}>
        {/* 이메일 입력란 */}
        <InputItem required type="email" margin="mr-24" name="email" title="이메일" />
        {/* 비밀번호 입력란 */}
        <div className="mt-14 flex gap-x-4">
          <InputItem required type="password" name="password" title="비밀번호" />
          <p
            id="password_warning"
            className="w-5/12 text-red-400 font-medium leading-snug invisible"
          >
            <br />
            <br />ⓘ 영문 대소문자 및 숫자를 모두 포함한 10자리 이상의 문자열을 입력해주세요.
          </p>
        </div>
        {/* 비밀번호 확인 입력란 */}
        <div className="mt-4 flex gap-x-4">
          <InputItem type="password" name="passwordConfirm" title="비밀번호 확인" />
          <p
            id="password_confirm_warning"
            className="w-5/12 text-red-400 font-medium leading-snug invisible"
          >
            <br />
            <br />ⓘ 입력하신 비밀번호가 일치하지 않습니다.
          </p>
        </div>
        <Button type="submit" margin="mt-80" bgColor="bg-slate-200" textColor="text-slate-600">
          다음 단계로
        </Button>
      </form>
    </div>
  );
}
