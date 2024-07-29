import { useState } from 'react';
import './slider.scss';

function Slider({images}) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    let index = null;

    if (direction == "left") {
        (imageIndex === 0) ? index = images.length - 1 : index = imageIndex - 1;
    } else {
        (imageIndex === images.length - 1) ? index = 0 : index = imageIndex + 1;
    }

    setImageIndex(index);
  }
  
  return (
    <div className='slider'>
        {imageIndex !== null && (
            <div className="fullSlider">
                <div className="arrow" onClick={() => changeSlide("left")}>
                    <img src="/arrow.png" alt="" />
                </div>
                <div className="imageContainer">
                    <img src={images[imageIndex]} alt="" />
                </div>
                <div className="arrow" onClick={() => changeSlide("right")}>
                    <img src="/arrow.png" className='right' alt="" />
                </div>
                <div className="close" onClick={() => setImageIndex(null)}>X</div>
            </div>
        )}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={() => setImageIndex(0)}/>
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)}/>
            ))}
        </div>
    </div>
  )
}

export default Slider;