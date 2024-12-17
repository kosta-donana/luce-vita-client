import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, SignUp, Travels, TravelDetail, Todo } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: '/travels',
    element: <Travels />,
  },
  {
    path: '/travels/:idHash',
    element: <TravelDetail />,
  },
  {
    path: '/travels/:idHash/:todoDate',
    element: <Todo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
