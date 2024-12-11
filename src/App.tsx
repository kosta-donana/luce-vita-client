import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, Travels } from './pages';

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
    path: '/travels',
    element: <Travels />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
