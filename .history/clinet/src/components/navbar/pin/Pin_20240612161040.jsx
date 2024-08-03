import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Pin({ item }) {
  return (
    <Marker position={[item?.latitute, item?.longitute]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed">{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
