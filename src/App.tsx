import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth } from './components/common/RequireAuth';
import { Home, Login, Travels, TravelDetail } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth redirect="/login" />,
    children: [
      { index: true, element: <Home /> },
      { path: '/travels', element: <Travels /> },
      { path: '/travels/:idHash', element: <TravelDetail /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
