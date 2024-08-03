import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Home from './routes/HomePage/Home';

function App() {
  return (
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
  );
}

export default App;
