import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Layout from './routes/layout/layout';
import Home from './routes/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ path: '/', element: <Layout /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
