import Navbar from '../../components/navbar/Navbar';
import Home from '../HomePage/Home';

function layout() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          {' '}
          <Navbar />
        </div>
        <div className="content">
          {' '}
          <Home />
        </div>
      </div>
      ;
    </>
  );
}

export default layout;
