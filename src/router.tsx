import { createBrowserRouter } from 'react-router-dom';
import { ExcludeAuth, RequireAuth } from './components/common';
import {
  Login,
  SignUp,
  EmailVerification,
  Home,
  MyPage,
  Travels,
  TravelCreate,
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
    element: <RequireAuth />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'travels', element: <Travels /> },
      { path: 'travels/create', element: <TravelCreate /> },
      { path: 'travels/:id', element: <TravelDetail /> },
      { path: 'travels/:id/:todoDate', element: <Todo /> },
    ],
  },
]);
