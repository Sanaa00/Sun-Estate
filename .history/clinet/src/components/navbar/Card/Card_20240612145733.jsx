import './card.scss';
import { Link } from 'react-router-dom';
function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="card" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link>{item.title}</Link>
        </h2>
      </div>
    </div>
  );
}

export default Card;
