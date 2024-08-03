import Slider from '../../components/navbar/slider/Slider';
import './singlePage.scss';
import { singlePostData, userData } from '../../lib/dummyData';
import pin from '../../../public/assets/pin.png';
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
                <img alt="" src={pin} />
                <span>{singlePostData.address}</span>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>{' '}
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
