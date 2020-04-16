import React from "react";
import "./team.css";

const index = () => {
  return (
    <div className="team-wrapper">
      <h3>404</h3>
      <p>this link dead link</p>
      <form>
        <input type="search" placeholder="Search here" />
        <button className="submit-btn">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
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
      </ul>

      <button className="return-home">
        <a href="#">Back to Home</a>
      </button>
    </div>
  );
};

export default index;
