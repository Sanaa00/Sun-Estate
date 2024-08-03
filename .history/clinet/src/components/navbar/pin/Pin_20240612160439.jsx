import React from 'react';

function Pin({ item }) {
  return (
    <Marker position={[item.latitute, item.longitute]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default Pin;
