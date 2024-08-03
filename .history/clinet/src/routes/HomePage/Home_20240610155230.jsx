import './home.scss';
import Search from '../../components/navbar/search/Search';
import bg from '../../../public/assets/bg.png';
function Home() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            numquam dolores tempore ipsam veritatis molestias repellat sit.
            Ratione voluptate maiores qui accusamus, earum sequi praesentium,
            voluptatibus, fugiat ducimus iusto tempora!
          </p>
          <Search />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experince</h2>
            </div>{' '}
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experince</h2>
            </div>{' '}
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experince</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Home;
