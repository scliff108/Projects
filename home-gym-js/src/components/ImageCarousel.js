import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel =  (props) => {
  const images = props.images.map((image, idx) => {
    return (
      <Carousel.Item key={idx}>
        <img className="d-block w-100" src={image} alt="Exercise" />
        <Carousel.Caption>
          <h3>Step {idx + 1}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  
  return (
    <Carousel>{images}</Carousel>
  );
}

export default ImageCarousel;