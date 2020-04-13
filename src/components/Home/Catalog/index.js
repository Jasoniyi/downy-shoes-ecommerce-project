import React from "react";

import CatalogCarousel from "./catalogCarousel";

const index = () => {
  return (
    <div>
      <div className="catalog-top">
        <div className="row">
          <div className="col-md-6">
            <div className="nike-image" />
          </div>
          <div className="col-md-6 catalog-top-right">
            <div className="nike-text">
              <h3>Nike DOWNSHIFTER</h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                maiores alias consequatur.sed quia non numquam eius modi tempora
                incidunt ut labore et dolore .
              </p>
            </div>
            <div className="air-force-text">
              <h3>Air force</h3>
            </div>
          </div>
        </div>

        <div className="catalog-middle">
          <div className="row">
            <div className="col-md-5">
              <div className="nike-text">
                <h3>Sneakers</h3>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                  maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore .
                </p>
              </div>
              <div className="air-force-image">
                <h3>Air force</h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="catalog-middle-right-image">
                <h3>Air force</h3>
              </div>

              <div className="nike-text-middle">
                <h3>Sneakers</h3>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                  maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore .
                </p>
              </div>
            </div>
          </div>
        </div>
        <CatalogCarousel />
      </div>
    </div>
  );
};

export default index;
