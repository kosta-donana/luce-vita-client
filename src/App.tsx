import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, SignUp, Travels, TravelDetail } from './pages';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
