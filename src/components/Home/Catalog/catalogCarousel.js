import React from "react";
import Slider from "react-slick";

import g1 from "../../../images/g1.jpg";
import g2 from "../../../images/g2.jpg";
import g3 from "../../../images/g3.jpg";
import g4 from "../../../images/g4.jpg";
import g5 from "../../../images/g5.jpg";
import g6 from "../../../images/g6.jpg";

const catalogCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="catalog-carousel-wrapper">
      <div className="row">
        <div className="col-md-3  catalog-carousel-text ">
          <h3>Show More Shoes</h3>
        </div>
        <div className="col-md-9 col-sm-12 adjust">
          <Slider {...settings}>
            <div>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${g1})`,
                  height: "35vh",
                }}
              />
            </div>

            <div>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${g2})`,
                  height: "35vh",
                }}
              />
            </div>

            <div>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${g3})`,
                  height: "35vh",
                }}
              />
            </div>

            <div>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${g4})`,
                  height: "35vh",
                }}
              />
            </div>

            <div>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${g5})`,
                  height: "35vh",
                }}
              />
            </div>

            <div>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${g6})`,
                  height: "35vh",
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default catalogCarousel;
