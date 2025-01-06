# Luce Vita (Client)

## 요약

> 여행을 기록하고 관리하는 앱

.. 대표 이미지 1장 ..

## 상세

8번째 PJT (팀 PJT)

### 0. 목차

1. 소개
2. 기술 스택
3. 느낀 점
4. 기능 (페이지 구성)
5. 아쉬웠던 부분
6. 앞으로 학습할 것들, 나아갈 방향
7. 어려웠던 부분, 해결한 과정

### 1. 소개

**루체 비타(Luce Vita)**

- 과거 다녀온 여행, 현재 진행중인 여행, 예정된 여행을 작성하고 관리하는 앱
- 예전에 다녀온 여행의 기록을 보며 추억할 수 있음
- 현재 진행중인 여행의 일정과 예산을 관리
- 나중에 있을 여행을 작성해 예정일을 확인하며 수정할 수 있음
- 진행중이거나 가장 가까운 예정의 여행은 3주짜리 캘린더를 통해 날짜 표시
- 각 여행은 여행 카드로 표현되며, 클릭해 해당 여행의 상세 정보 확인 가능
- 여행의 제목, 시작·종료 날짜, 국가, 장소, 숙소, 예산과 잔액, 태그 표시
- 날짜별 할 일과 각 예산 지정
- 회원가입을 통해 서비스 이용 가능

작업 기간

- 2024/12, 4주

인력 구성

- 4인 (FE 2인, BE 2인)
- 홈, 여행 목록, 일정 상세
- 사용자 인증, 로그인, 회원가입, 여행 상세, 마이페이지

링크 목록

- [Luce Vita 앱](https://luce-vita-client.vercel.app/)
- [Luce Vita 서버](https://luce-vita-server-test.vercel.app/)
- [Luce Vita DB](https://supabase.com/dashboard/project/xvkskcomnspwcdhmdtzu)

### 2. 기술 스택

- `TypeScript`: 정적 타입을 도입해 안정성·가독성 향상
- `React`: 컴포넌트 기반으로 재사용 가능한 UI 구축
- `React Router`: 클라이언트 라우팅 관리
- `TanStack Query`: 서버 상태 관리, 데이터 동기화를 효율적으로 사용
- `Axios`: 간결한 HTTP 요청·응답 처리
- `Vite`: 빠른 HMR, 빌드 속도
- `Tailwind CSS`: 간단하고 일관된 디자인 시스템 구현
- `Font Awesome`: 다양한 아이콘 사용

### 3. 느낀 점

**함희주**

```

```

**이재성**

```

```

### 4. 기능 (페이지 구성)

1. 로그인 (Login)
2. 회원가입 (Signup)
3. 홈 (Home)
4. 마이페이지 (MyPage)
5. 여행 목록 (Travels)
6. 여행 상세 (TraveDetail)
7. 여행 수정 (TravelEdit)
8. 일정 상세 (Todo)
9. 여행 생성 (TravelCreate)

1 로그인 (Login)

![로그인 전](./images/00-before-login.png)

- 로그인 필수

![로그인](./images/01-login.png)

- 이메일, 비밀번호를 입력해 로그인
- 소셜 로그인 버튼 (향후 구현)

2 회원가입 (Signup)

![이메일 회원가입](./images/02-signup.png)

- 이메일, 비밀번호를 입력해 회원가입

![이메일 인증](./images/03-signup-verification.png)

- 유효한 이메일인지 인증코드를 해당 이메일로 전송

![이메일 인증 코드](./images/04-email-verification.png)

- 해당 이메일로 인증코드를 받아 이메일 인증 화면에 입력

3 홈 (Home)

![홈](./images/05-home.png)

- 홈 화면
- 탑 내비게이션 바
- 여행 일정 캘린더
  - 현재 일을 포함한 3주 이내의 여행이 있는지 확인
  - 현재 일은 하얀 배경으로 출력
  - 여행 기간에 포함되는 날짜는 녹색 배경으로 출력
- 현재 진행중인 여행 카드들
  - 여행 제목, 날짜, 국가, 장소, 숙소
  - 잔액, 태그
  - 현재 진행중이라는 것을 녹색 테두리로 출력
- 예정된 여행 카드들
  - 다가오는 여행 순으로 여행 카드 출력
- 우측 하단 버튼을 눌러 새로운 여행 생성
- 여행 카드 클릭 시 여행 목록 페이지로 이동

4 마이페이지 (MyPage)

![마이페이지](./images/06-mypage.png)

- 닉네임 출력
- 로그아웃, 회원탈퇴 버튼

5 여행 목록 (Travels)

![여행 목록](./images/07-travels.png)

- 스크롤을 내릴 수록 과거의 여행 카드를 출력
- 예정된 여행 카드
  - 블러 처리를 해 현재 진행중인 여행 카드에 집중할 수 있게 함
- 현재 진행중인 여행 카드
  - 녹색 테두리로 출력
  - 실시간 잔액 계산
- 과거 여행 카드
  - 회색 배경으로 처리
  - 과거 작성했던 여행 기록이 남아 있어 향후 다른 여행에 참고할 수 있음
- 각 여행 카드 클릭 시 해당 여행의 상세 페이지로 이동

6 여행 상세 (TravelDetail)

![여행 상세 1](./images/08-travel-detail-1.png)

- 탑 내비게이션 바
  - 뒤로 가기, 여행 삭제 버튼
- 제목, 날짜, 국가 및 장소, 숙소, 메모
- 총 예산, 소비 금액, 잔액
- 여행 수정 버튼
  - 클릭 시 여행 상세 수정 페이지로 이동

![여행 상세 2](./images/09-travel-detail-2.png)

- 해당 여행의 각 날짜에 대한 상세 일정
  - 각 일정 클릭 시 해당 날짜의 일정 상세 페이지로 이동

7 여행 상세 수정 (TravelEdit)

![여행 상세 수정](./images/10-travel-edit.png)

- 제목, 날짜, 국가 및 장소, 숙소, 총 예산, 메모
- 저장하기 버튼 클릭 시 수정 내용 저장

8 일정 상세 (Todo)

![일정 상세](./images/11-todo-create-1.png)

- 저장하기 버튼
  - 클릭 시 작성된 일정 상세 저장
- 할 일 입력창
- 예산 입력 창
  - 해당 할 일에 대한 예산

![일정 상세 (할 일, 예산 작성됨)](./images/12-todo-create-2.png)

- 만들기 버튼
  - 할 일, 예산이 묶인 요소 생성
- 삭제 버튼
  - 클릭 시 해당 할 일, 예산 요소 삭제

![여행 상세에서 방금 작성한 일정 확인](./images/13-todo-create-3.png)

- 해당 날짜의 방금 작성한 일정 확인 가능

9 여행 생성 (TravelCreate)

![여행 생성](./images/14-travel-create-1.png)

![여행 생성 (작성중)](./images/15-travel-create-2.png)

- 우측 상단 여행 추가 버튼
  - 클릭시 양식에 작성된 내용을 바탕으로 새로운 여행 생성
- 제목, 날짜, 국가 및 장소, 숙소, 총 예산, 메모

![여행 생성 (생성 완료 후 여행 목록으로)](./images/16-travel-create-3.png)

- 생성 시 여행 목록에서 확인 가능

![여행 생성 (방금 생성한 여행의 상세 페이지 1)](./images/17-travel-create-4.png)

![여행 생성 (방금 생성한 여행의 상세 페이지 2)](./images/18-travel-create-5.png)

- 생성한 해당 여행 클릭 시 여행 상세 페이지로 이동

![여행 삭제 1](./images/19-travel-delete-1.png)

![여행 삭제 2](./images/20-travel-delete-2.png)

![여행 삭제 3](./images/21-travel-delete-3.png)

- 여행 상세 페이지의 우측 상단 쓰레기통 버튼 클릭 시 여행 삭제

### 5. 아쉬웠던 부분

- ..

### 6. 앞으로 학습할 것들, 나아갈 방향

- ..

### 7. 어려웠던 부분, 해결한 과정

??

- ..

???

- ...
