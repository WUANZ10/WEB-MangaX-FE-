import React from "react";
import Slider from "react-slick";

export default function SliderComponent({ arrImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        {arrImages.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <img
                src={image}
                alt="slider"
                width="100%"
                height="200px"
              />
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
}
