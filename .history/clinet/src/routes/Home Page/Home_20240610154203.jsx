import './home.scss';

import bg from '../../../public/assets/bg.png';
function Home() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper"></div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Home;
