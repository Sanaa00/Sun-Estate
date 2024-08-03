import './layout.scss';
import Layout from './routes/layout/layout';
import Home from './routes/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import 'leaflet/dist/leaflet.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
