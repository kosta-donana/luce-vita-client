import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faUser, faFloppyDisk, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withNavigation } from './withNavigation';
import { MainWrapper, TopNav, FullWidthButton, Input } from '../components/common';

type Todo = {
  schedule: string;
  budget: number;
};

export const Todo = withNavigation(() => {
  const formRef = useRef<HTMLFormElement>(null);
  const scheduleRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  async function saveHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const schedule_list: {
      schedule_id?: number;
      schedule_no: number;
      schedule_content: string;
      budget: number;
    }[] = [
      {
        schedule_id: 1,
        schedule_no: 1,
        schedule_content: todos[0].schedule,
        budget: todos[0].budget,
      },
    ];
    for (const [i, todo] of todos.slice(1).entries()) {
      schedule_list.push({
        schedule_no: i + 2,
        schedule_content: todo.schedule,
        budget: todo.budget,
      });
    }
    console.log('schedule_list:', schedule_list);

    // const sendData = {
    //   // 날짜 받아와야 됨 수정할 예정
    //   schedule_date: '2024-12-29',
    //   schedule_list: [
    //     { schedule_id: 1, schedule_no: 1, schedule_content: '첫번째는왜안생김', budget: 20000 },
    //     { schedule_no: 2, schedule_content: '두번째는되는듯', budget: 30000 },
    //     { schedule_no: 3, schedule_content: '세번째는?', budget: 70000 },
    //   ],
    // };

    const sendData = { schedule_date: '2024-12-29', schedule_list };
    const result = await axios.post(
      'http://localhost:3000/api/travels/767b2e18-7909-46bf-b807-d1346ea928ec/schedules',
      sendData
    );
    console.log('result:', result);
  }

  function createHandler() {
    const todo: Todo = { schedule: '', budget: 0 };
    if (scheduleRef.current) {
      todo.schedule = scheduleRef.current.value;
      scheduleRef.current.value = '';
    }
    if (budgetRef.current) {
      todo.budget = Number(budgetRef.current.value);
      budgetRef.current.value = '';
    }
    setTodos((prev) => [...prev, todo]);
  }

  function deleteHandler(event: React.FormEvent<HTMLButtonElement>, targetIndex: number) {
    event.preventDefault();
    console.log(targetIndex);
    setTodos((prevTodos) => {
      const result = [];
      for (const [idx, prevTodo] of prevTodos.entries()) {
        if (idx !== targetIndex) {
          result.push(prevTodo);
        }
      }
      return result;
    });
  }

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
      <form ref={formRef} className="mt-9" method="post" onSubmit={saveHandler}>
        {/* 저장 버튼 */}
        <FullWidthButton
          type="submit"
          margins="my-7"
          bgColor="bg-primary-400"
          textColor="text-white"
        >
          <FontAwesomeIcon icon={faFloppyDisk} className="mr-3" />
          <span>저장하기</span>
        </FullWidthButton>
        {/*  */}
        <section className="mt-8 pl-5 pr-5 py-6 bg-primary-300 text-white rounded-2xl shadow-md">
          {/* 할 일 입력창 */}
          <Input
            required
            type="text"
            name="todo"
            placeholder="할 일을 입력하세요"
            bgColor="bg-white"
            borderColor="border-primary-200"
            ref={scheduleRef}
          />
          {/* 예산 입력창 */}
          <Input
            required
            type="number"
            name="budget"
            placeholder="예산을 입력하세요"
            bgColor="bg-white"
            borderColor="border-primary-200"
            ref={budgetRef}
          />
          {/* 만들기 버튼 */}
          <FullWidthButton
            type="button"
            margins="my-7"
            bgColor="bg-secondary-400"
            textColor="text-white"
            handleClick={() => {
              createHandler();
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            <span>만들기</span>
          </FullWidthButton>
          {/* 할 일 */}
          {todos?.map((todo, i) => (
            <div
              key={i + 1}
              className="px-5 py-3.5 bg-white w-full text-gray-700 text-2xl rounded-2xl border-2 flex justify-between"
            >
              <span className="text-slate-600">{todo.schedule}</span>
              <div>
                <span className="text-sm text-slate-400 mr-6">{todo.budget} CUR</span>
                <button
                  onClick={(e) => {
                    deleteHandler(e, i);
                  }}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            </div>
          ))}
        </section>
      </form>
    </MainWrapper>
  );
});
