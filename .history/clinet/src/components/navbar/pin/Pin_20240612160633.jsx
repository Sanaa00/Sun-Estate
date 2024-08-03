import React from 'react';

function Pin({ item }) {
  return (
    <Marker position={[item.latitute, item.longitute]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{}</Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
