import './card.scss';
import { Link } from 'react-router-dom';
import pin from '../../../../public/assets/pin.png';
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
        </p>
      </div>
    </div>
  );
}

export default Card;
