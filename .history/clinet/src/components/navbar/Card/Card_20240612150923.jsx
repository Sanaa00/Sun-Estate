import './card.scss';
import { Link } from 'react-router-dom';
import pin from '../../../../public/assets/pin.png';
import bath from '../../../../public/assets/bath.png';
import bed from '../../../../public/assets/bed.png';
import chat from '../../../../public/assets/chat.png';
import save from '../../../../public/assets/save.png';
function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="card" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        <p className="address">
          <img src={pin} alt="pin" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="feature">
            <img src={bath} alt="" />
            <span>{item.bathroom} bathroom</span>
          </div>
          <div className="feature">
            <img src={bed} alt="" />
            <span>{item.bathroom} bathroom</span>
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <img src={save} alt />
          </div>
          <div className="icon">
            <img src={} alt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
