import Slider from '../../components/navbar/slider/Slider';
import './singlePage.scss';
function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
        </div>
      </div>
      <div className="feauters">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
