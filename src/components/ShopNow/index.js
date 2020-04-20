import React from "react";
import "./shop.css";

import SpeacialDeals from "./SpecialDeals";
import DisplayProducts from "./displayProducts";
// import Modal from "./Modal/index";

const Index = () => {
  return (
    <div className="shop-wrapper">
      <div className="row">
        <div className="col-md-4">
          <div className="shop-left">
            <h5>Search Here..</h5>
            <form>
              <input type="search" placeholder="Product name..." />
              <button className="search-products-btn">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>

            {/* --- price range --- */}
            <div className="price-range">
              <h5>Price Range</h5>
            </div>

            {/* --- Occasions -------- */}
            <div className="occasion-wrapper">
              <h4>Occasion</h4>
              <ul>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Casuals</span>
                </li>

                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Party</span>
                </li>

                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Wedding</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Ethnic</span>
                </li>
              </ul>
            </div>

            {/* --- Discounts -------- */}
            <div className="discount-items-wrapper">
              <h4>Discount</h4>
              <ul>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">5% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">10% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">20% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">30% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">50% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">60% or More</span>
                </li>
              </ul>
            </div>

            {/* --- Customer Review -------- */}
            <div className="customer-review-wrapper">
              <h4>Customer Review</h4>
              <ul>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>5.0</span>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>4.0</span>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>3.5</span>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>3.0</span>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>2.5</span>
                </li>
              </ul>
            </div>

            {/* --- Special Deals -------- */}
            <div className="special-deals-wrapper">
              <h4>Special Deals</h4>
              <SpeacialDeals />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="shop-right">
            <div className="discounted-products">
              <div className="discount-left">
                <h4>40% Off</h4>
              </div>
              <div className="discount-right">
                <h4>50% Off</h4>
              </div>
            </div>
            <div className="product-catalog">
              {/* <Modal /> */}
              <DisplayProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
