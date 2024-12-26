import { createBrowserRouter } from 'react-router-dom';
import { ExcludeAuth } from './components/common/ExcludeAuth';
import { RequireAuth } from './components/common/RequireAuth';
import {
  Login,
  SignUp,
  EmailVerification,
  Home,
  MyPage,
  Travels,
  TravelDetail,
  Todo,
} from './pages';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <ExcludeAuth>
        <Login />
      </ExcludeAuth>
    ),
  },
  {
    path: '/signup',
    element: (
      <ExcludeAuth>
        <SignUp />
      </ExcludeAuth>
    ),
  },
  {
    path: '/emailverification',
    element: (
      <ExcludeAuth>
        <EmailVerification />
      </ExcludeAuth>
    ),
  },
  {
    path: '/',
    element: <RequireAuth redirect="/login" />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'travels', element: <Travels /> },
      { path: 'travels/:idHash', element: <TravelDetail /> },
      { path: 'travels/:idHash/:todoDate', element: <Todo /> },
    ],
  },
]);
