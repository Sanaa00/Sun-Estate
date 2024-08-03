import React from 'react';

function Pin() {
  return (
    <Marker position={[52.4797, -1.90268]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default Pin;
