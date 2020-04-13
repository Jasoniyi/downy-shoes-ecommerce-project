import React from "react";
import Slider from "react-slick";

import Img1 from "../../../images/banner1.jpg";
import Img2 from "../../../images/banner2.jpg";
import Img3 from "../../../images/banner3.jpg";
import Img4 from "../../../images/banner4.jpg";

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 700,
    dots: true,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${Img1})`,
              height: "100vh",
            }}
          >
            <div className="banner-text">
              <h3>Sneakers</h3>
              <p>See how good they feel</p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${Img2})`,
              height: "100vh",
            }}
          >
            <div className="banner-text">
              <h3>Adidas</h3>
              <p>for all work of life</p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${Img3})`,
              height: "100vh",
            }}
          >
            <div className="banner-text">
              <h3>Nike</h3>
              <p>see how good they feel</p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${Img4})`,
              height: "100vh",
            }}
          >
            <div className="banner-text">
              <h3>Heels</h3>
              <p>for all works of life</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
