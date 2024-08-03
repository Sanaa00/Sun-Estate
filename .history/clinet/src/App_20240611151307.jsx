import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Home from './routes/HomePage/Home';

function App() {

  const router = createBrowserRouter({
    {
      path: "/",
      element:(<Home/>)
    },
  })
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     {' '}
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     {' '}
    //     <Home />
    //   </div>
    // </div>
    <RouterProvider />
  );
}

export default App;
