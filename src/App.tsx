import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, SignUp, EmailVerification, Travels, TravelDetail, Todo } from './pages';

const devRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/emailverification', element: <EmailVerification /> },
  { path: '/travels', element: <Travels /> },
  { path: '/travels/:idHash', element: <TravelDetail /> },
  { path: '/travels/:idHash/:todoDate', element: <Todo /> },
]);

function App() {
  return <RouterProvider router={devRouter} />;
  // return <RouterProvider router={router} />;
}

export default App;
