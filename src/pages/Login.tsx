import InputItem from '../components/login/InputItem';
import FullButton from '../components/common/FullButton';

export function Login() {
  return (
    <div className="px-16 py-20 bg-slate-200">
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
        <FullButton type="submit" margin="mt-14" bgColor="bg-primary-400" textColor="text-white">
          로그인하기
        </FullButton>
      </form>
    </div>
  );
}
