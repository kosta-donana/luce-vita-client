import { Link } from 'react-router-dom';
import { InputItem } from '../components/login/InputItem';
import { FullWidthButton as Button } from '../components/common/FullWidthButton';

export function Login() {
  return (
    <div className="px-16 py-20 bg-slate-200 min-h-full">
      {/* 제목 */}
      <h1 className="mt-20 text-primary-400 text-[4rem] font-semibold text-center">Luce Vita!</h1>
      {/* 소개글 */}
      <p className="my-20 text-primary-400 text-2xl/loose font-medium text-center">
        여러분의 삶 속에서 모든 여행을 함께하며
        <br />
        계획을 세우고, 일정과 예산을 관리하기 위한
        <br />
        서비스를 제공합니다.
      </p>
      <form className="mt-32" method="post">
        <InputItem type="email" name="email" title="이메일" />
        <InputItem type="password" name="password" title="비밀번호" />
        <Button type="submit" margin="mt-14" bgColor="bg-primary-400" textColor="text-white">
          로그인하기
        </Button>
      </form>
      <div className="mt-3 text-gray-600 underline text-xl flex justify-between">
        <Link to="/">이메일로 회원가입하러 가기</Link>
        {/* <Link to="/">비밀번호 찾기</Link> */}
      </div>
      <div className="mt-9 flex gap-x-10">
        <Button type="button" bgColor="bg-[#fee500]" textColor="text-[#191919]">
          카카오 로그인
        </Button>
        <Button type="button" bgColor="bg-white" textColor="text-black">
          <img src="/google.png" className="size-14" alt="구글 로그인" />
        </Button>
      </div>
    </div>
  );
}
