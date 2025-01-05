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
4. 여행 목록 (Travels)
5. 여행 상세 (TraveDetail)
6. 여행 생성 (TravelCreate)
7. 여행 수정 (TravelEdit)
8. 일정 상세 (Todo)
9. 마이페이지 (MyPage)

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
- 여행 일정 캘린더
  - 현재 일을 포함한 3주 이내의 여행이 있는지 확인
- 현재 진행중인 여행 카드들
- 예정된 여행 카드들

4 여행 목록 (Travels)

5 여행 상세 (TravelDetail)

6 여행 생성 (TravelCreate)

7 여행 상세 수정 (TravelEdit)

8 일정 상세 (Todo)

- 할 일
- 예산

9 마이페이지 (MyPage)

|||
|:-:|:-:|:-:|
|||

시연 영상

### 5. 아쉬웠던 부분

- ..

### 6. 앞으로 학습할 것들, 나아갈 방향

- ..

### 7. 어려웠던 부분, 해결한 과정

??

- ..

???

- ...
