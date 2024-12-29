import { useRef } from 'react';
import { faLeftLong, faUser } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { MainWrapper, TopNav, FullWidthButton, Input } from '../components/common';

export const Todo = withNavigation(() => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <MainWrapper paddings="p-6" bgColor="bg-primary-100">
      {/* 내비게이션 바 */}
      <TopNav
        navIconInfos={[
          { id: faLeftLong, title: '이전 화면으로 되돌아가기', route: -1 },
          { id: faUser, title: '마이페이지로 이동하기', route: '/mypage' },
        ]}
        bgColor="bg-secondary-500"
        iconColor="text-neutral-600"
        title="00월 00일 일정 상세"
        titleColor="text-neutral-50"
      />
      {/*  */}
      <form ref={formRef} className="mt-9" method="post">
        {/* 저장 버튼 */}
        <FullWidthButton
          type="submit"
          margins="my-7"
          bgColor="bg-primary-400"
          textColor="text-white"
        >
          저장하기
        </FullWidthButton>
        {/*  */}
        <section className="mt-8 pl-5 pr-5 py-6 bg-primary-300 text-white rounded-2xl shadow-md">
          {/*  */}
          <Input
            required
            type="text"
            name="todo"
            placeholder="할 일을 입력하세요"
            bgColor="bg-white"
            borderColor="border-primary-200"
          />
          {/*  */}
          <Input
            required
            type="number"
            name="budget"
            placeholder="예산을 입력하세요"
            bgColor="bg-white"
            borderColor="border-primary-200"
          />
          {/* 만들기 버튼 */}
          <FullWidthButton
            type="button"
            margins="my-7"
            bgColor="bg-secondary-400"
            textColor="text-white"
          >
            만들기
          </FullWidthButton>
          {/* 할일 */}
          <div className="px-5 py-3.5 bg-white w-full text-gray-700 text-2xl rounded-2xl border-2">
            할 일 1
          </div>
        </section>
      </form>
    </MainWrapper>
  );
});
