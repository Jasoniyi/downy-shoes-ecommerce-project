import React from "react";
import "./shopItem.css";

import CatalogCarousel from "../Home/Catalog/catalogCarousel";
import Newsletter from "../Home/Newsletter";

const Index = (props) => {
  console.log("shopItem", props);
  console.log("gett", props.location.state.item);
  let item = props.location.state.item;
  return (
    <div className="shopitem-wrapper">
      <div className="row">
        <div className="col-md-4">
          <div className="shopitem-image">
            <img src={item.image} alt={item.name} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="shopitem-heading">
            <h2>{item.name}</h2>
            <p>
              N{item.price} <span>$1,199</span>
            </p>
          </div>
          <div className="shopitem-details">
            <div class="rating1">
              <ul class="stars">
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
            <div className="shopitem-charges">
              <p>
                Check delivery, payment options and charges at your location
              </p>
              <form>
                <input type="text" placeholder="Enter pincode" />
                <button type="submit" value="CHECK">
                  {" "}
                  CHECK
                </button>
              </form>

              <div className="shopitem-quality">
                <p>Quality:</p>{" "}
                <i
                  className="fa fa-plus-circle shopitem-increase-button"
                  aria-hidden="true"
                ></i>
                {item.quantity} Qty
                <span className="decrease-quantity">
                  <i class="fa fa-minus-circle" aria-hidden="true"></i>
                </span>
              </div>

              <div className="shopitem-types">
                <p>Types:</p>
                <div className="shoe-types">
                  <label class="radio">
                    <input type="radio" name="radio" checked="true" />
                    <i></i>Casual Shoes
                  </label>
                  <label class="radio">
                    <input type="radio" name="radio" />
                    <i></i>Sneakers{" "}
                  </label>
                  <label class="radio">
                    <input type="radio" name="radio" />
                    <i></i>Formal Shoes
                  </label>
                </div>
              </div>

              <button> add to cart</button>

              <div className="share-buttons">
                <div className="share-header">Share on </div>
                <div>
                  <ul class="social-nav model-3d-0 footer-social social two">
                    <li>
                      <a href="#" class="facebook">
                        <div class="front">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                        <div class="back">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="twitter">
                        <div class="front">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div class="back">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="instagram">
                        <div class="front">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div class="back">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pinterest">
                        <div class="front">
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                        <div class="back">
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CatalogCarousel />
      <Newsletter />
    </div>
  );
};

export default Index;
