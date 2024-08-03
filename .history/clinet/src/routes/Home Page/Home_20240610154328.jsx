import './home.scss';

import bg from '../../../public/assets/bg.png';
function Home() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place Find Estate & Get Your Dream
            Place
          </h1>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Home;
