/* eslint-disable react/prop-types */
function Slider({ images }) {
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={images[0]} />
      </div>
      <div className="smallImages">
        {images.Slice(1).map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
