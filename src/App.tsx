import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth } from './components/common/RequireAuth';
import { Home, Login, SignUp, EmailVerification, Travels, TravelDetail, Todo } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth redirect="/login" />,
    children: [
      { index: true, element: <Home /> },
      { path: 'travels', element: <Travels /> },
      { path: 'travels/:idHash', element: <TravelDetail /> },
      { path: 'travels/:idHash/:todoDate', element: <Todo /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/emailverification',
    element: <EmailVerification />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
