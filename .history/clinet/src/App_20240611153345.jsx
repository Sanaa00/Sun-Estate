import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Home from './routes/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
