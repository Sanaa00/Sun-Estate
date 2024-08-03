import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Home from './routes/Home Page/Home';

function App() {
  return (
    <div className="layout">
      <div className="navbar"></div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
