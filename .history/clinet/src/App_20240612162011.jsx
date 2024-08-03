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
        { path: '/', element: <Home /> },
        { path: '/List', element: <ListPage /> },
        { path: '/:id', element: <SinglePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
