import './layout.scss';
import { Layout, RequireAuth } from './routes/layout/layout';
import Home from './routes/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import 'leaflet/dist/leaflet.css';
import ProfilePage from './routes/profilePage/profilePage';
import Login from './routes/login/login';
import Register from './routes/register/register';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import { singlePageloader } from './lib/loader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/list',
          element: <ListPage />,
          // loader:
        },
        {
          path: '/:id',
          element: <SinglePage />,
          loader: singlePageloader,
        },

        // {
        //   path: '/profile',
        //   element: <ProfilePage />,
        // },
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
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
