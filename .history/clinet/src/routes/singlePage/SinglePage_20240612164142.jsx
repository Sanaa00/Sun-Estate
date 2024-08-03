import Slider from '../../components/navbar/slider/Slider';
import './singlePage.scss';
import { singlePostData } from '../../lib/dummyData';
function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">{singlePostData.title}</div>
              <div className="address">
                <img alt=" s" src="" />
              </div>
              <div className="user"></div>{' '}
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="feauters">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
