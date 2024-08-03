/* eslint-disable react/prop-types */
import arrow from '../../../../public/assets/arrow.png';
function Slider({ images }) {
  console.log(images);
  return (
    <div className="slider">
      <div className="fullSlider">
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
        <div className="imgContainer">
          <img src={images[0]} alt="" />
        </div>
        <div className="arrow">
          <img src={arrow} className="right" alt="" />
        </div>
        <div className="close">X</div>
      </div>
      <div className="bigImage">
        <img src={images[0]} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
