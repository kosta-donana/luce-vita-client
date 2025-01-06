import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faUser, faFloppyDisk, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { withNavigation } from './withNavigation';
import { MainWrapper, TopNav, FullWidthButton, Input } from '../components/common';
import { formatToSimple } from '../utils/format-date.util';

type Todo = {
  schedule_id?: number;
  schedule_content: string;
  budget: number;
};

export const Todo = withNavigation(() => {
  const navigate = useNavigate();
  const { id, todoDate } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  const isLoadingRef = useRef<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);
  const scheduleContentRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLInputElement>(null);

  let isSaving = false;

  /**
   * 서버로부터 최신화된 일정 정보를 가져오는 기능의 함수입니다.
   */
  const fetchTodos = useCallback(async () => {
    isLoadingRef.current = true;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_VERCEL_API_BASE_URL}/travels/${id}/schedules/${todoDate}`
      );

      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      isLoadingRef.current = false;
    }
  }, [id, todoDate]);

  // 서버로부터 일정 정보 가져오기
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  function saveHandler() {
    if (isSaving) return;

    isSaving = true;

    const schedule_list: {
      schedule_id?: number;
      schedule_no: number;
      schedule_content: string;
      budget: number;
    }[] = [];
    for (const [i, todo] of todos.entries()) {
      schedule_list.push({
        schedule_no: i + 1,
        schedule_content: todo.schedule_content,
        budget: todo.budget,
      });
    }

    const sendData = { schedule_date: todoDate, schedule_list };
    axios
      .post(`${import.meta.env.VITE_VERCEL_API_BASE_URL}/travels/${id}/schedules`, sendData)
      .then((response) => {
        if (response.data.success) {
          alert('일정이 성공적으로 저장되었습니다!');
          fetchTodos();
        } else {
          console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
        }
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          navigate('/login');
        } else if (error.code === 'ECONNABORTED') {
          alert(
            '네트워크 연결이 불안정하거나, 서버의 응답이 너무 오래 걸립니다. 잠시 후에 다시 시도하세요.'
          );
        } else {
          alert('서버 오류가 발생하였습니다.');
        }
      })
      .finally(() => {
        isSaving = false;
      });
  }

  function createHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoadingRef.current) {
      alert('서버로부터 최신화된 일정 정보를 가져오는 중입니다..');
      return;
    }

    const todo: Todo = { schedule_content: '', budget: 0 };
    if (budgetRef.current) {
      // 예산 유효성 검사하기
      if (Number(budgetRef.current.value) < 0) {
        budgetRef.current.focus();

        alert('입력하신 금액이 0보다 작습니다. 예산을 정확히 입력해주세요.');
        return;
      }
      todo.budget = Number(budgetRef.current.value);
      budgetRef.current.value = '';
    }
    if (scheduleContentRef.current) {
      todo.schedule_content = scheduleContentRef.current.value;
      scheduleContentRef.current.value = '';
    }
    setTodos((prev) => [...prev, todo]);
  }

  function deleteHandler(targetIndex: number) {
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
        title={`${formatToSimple(new Date(todoDate!))} 일정 상세`}
        titleColor="text-neutral-50"
      />
      {/* 저장 버튼 */}
      <FullWidthButton
        type="button"
        margins="mt-8"
        bgColor="bg-primary-400"
        textColor="text-white"
        handleClick={saveHandler}
      >
        <FontAwesomeIcon icon={faFloppyDisk} className="mr-3" />
        <span>저장하기</span>
      </FullWidthButton>
      <form
        ref={formRef}
        className="mt-6 px-5 py-6 bg-primary-300 text-white rounded-2xl shadow-md"
        onSubmit={createHandler}
      >
        {/* 할 일 입력창 */}
        <Input
          required
          ref={scheduleContentRef}
          margins="my-2.5"
          type="text"
          name="scheduleContent"
          bgColor="bg-white"
          borderColor="border-primary-200"
          placeholder="할 일을 입력하세요"
        />
        {/* 예산 입력창 */}
        <Input
          required
          ref={budgetRef}
          margins="my-2.5"
          type="number"
          name="budget"
          bgColor="bg-white"
          borderColor="border-primary-200"
          placeholder="예산을 입력하세요"
        />
        {/* 만들기 버튼 */}
        <FullWidthButton
          type="submit"
          margins="my-7"
          bgColor="bg-secondary-400"
          textColor="text-white"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-3" />
          <span>만들기</span>
        </FullWidthButton>
        {/* 할 일 */}
        {todos?.map((todo, i) => (
          <div
            key={i + 1}
            className="my-4 px-5 py-3.5 bg-white w-full text-gray-700 text-2xl rounded-2xl border-2 flex justify-between"
          >
            <span className="text-slate-600">{todo.schedule_content}</span>
            <div>
              <span className="mr-6 text-slate-400 text-sm">{todo.budget} CUR</span>
              <button
                type="button"
                onClick={() => {
                  deleteHandler(i);
                }}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </div>
        ))}
      </form>
    </MainWrapper>
  );
});
