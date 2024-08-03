import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Home from './routes/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/List',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
