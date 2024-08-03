/* eslint-disable react/prop-types */
function Slider({ images }) {
  return (
    <div className="slider">
      <div className="fullSlider">
        <div className="arrow">
          <img src="" alt="" />
        </div>
        <div className="imgContainer"></div>
        <div className="arrow">
          <img src="" alt="" />
        </div>
      </div>
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
