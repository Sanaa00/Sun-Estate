import React from 'react';

function Pin({ item }) {
  return (
    <Marker position={[item.latitute, item.longitute]}>
      <Popup>
        <div className="popupContainer">
          <img src="" alt="" />
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
