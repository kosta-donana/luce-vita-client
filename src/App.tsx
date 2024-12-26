import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Home,
  MyPage,
  Login,
  SignUp,
  EmailVerification,
  Travels,
  TravelCreate,
  TravelDetail,
  Todo,
} from './pages';

const devRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/mypage', element: <MyPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/emailverification', element: <EmailVerification /> },
  { path: '/travels', element: <Travels /> },
  { path: '/travels/create', element: <TravelCreate /> },
  { path: '/travels/:idHash', element: <TravelDetail /> },
  { path: '/travels/:idHash/:todoDate', element: <Todo /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={devRouter} />
      {/* <RouterProvider router={router} /> */}
    </QueryClientProvider>
  );
}

export default App;
