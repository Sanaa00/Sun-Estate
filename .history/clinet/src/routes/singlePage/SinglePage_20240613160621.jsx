import Slider from '../../components/navbar/slider/Slider';
import './singlePage.scss';
import { singlePostData, userData } from '../../lib/dummyData';
import pin from '../../../public/assets/pin.png';
import Slider from '../../components/navbar/slider/Slider';
function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                {singlePostData.title}
                <div className="address">
                  <img alt="" src={pin} />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>{' '}
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="feauters">
        <div className="wrapper">
          <p className="title">general</p>
          <div className="listVertical">
            <div className="feature">
              <img src="" alt="" />
              <div className="featureText">
                <span>Utility</span>
                <p>REnder is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="" alt="" />
              <div className="featureText">
                <span>pet polices</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes"></div>
          <p className="title">Nearbay Places</p>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img alt="" src="/" />
              Send a message
            </button>
            <button>
              <img alt="" src="/" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
