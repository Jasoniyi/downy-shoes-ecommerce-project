import React from "react";

import t1 from "../../../images/t1.jpg";
import t2 from "../../../images/t2.jpg";
import t3 from "../../../images/t3.jpg";
import t4 from "../../../images/t4.jpg";

const index = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-info">
        <div className="footer-left">
          <div className="footer-logo">
            <h4>
              <span>D</span>owny Shoes
            </h4>
          </div>
          <div className="footer-text">
            <p>
              Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
              quia non numquam eius modi tempora.
            </p>
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

        <div className="footer-info-left">
          <div className="footer-label sign-gd">
            <h4>Our Information</h4>
          </div>
          <div className="footer-lists">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Short Codes</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-info-store sign-gd-two">
          <h4>
            Store <span>Information</span>
          </h4>
          <div class="address">
            <div class="address-grid">
              <div class="address-left">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="address-right">
                <h6>Phone Number</h6>
                <p>+1 234 567 8901</p>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="address-grid">
              <div class="address-left">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="address-right">
                <h6>Email Address</h6>
                <p>
                  Email :
                  <a href="mailto:example@email.com"> mail@example.com</a>
                </p>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="address-grid">
              <div class="address-left">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="address-right">
                <h6>Location</h6>
                <p>Broome St, NY 10002,California, USA.</p>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="footer-right sign-gd flickr-post">
          <h4>
            Flickr <span>Posts</span>
          </h4>
          <ul>
            <li>
              <a href="single.html">
                <img
                  src={t1}
                  alt=" "
                  class="img-responsive"
                  width="50px"
                  style={{ margin: "0", padding: "0" }}
                />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img
                  src={t2}
                  alt=" "
                  class="img-responsive"
                  width="50px"
                  style={{ margin: "0", padding: "0" }}
                />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img
                  src={t3}
                  alt=" "
                  class="img-responsive"
                  width="50px"
                  style={{ margin: "0", padding: "0" }}
                />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img src={t4} alt=" " class="img-responsive" width="50px" />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img src={t1} alt=" " class="img-responsive" width="50px" />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img src={t2} alt=" " class="img-responsive" width="50px" />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img src={t3} alt=" " class="img-responsive" width="50px" />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img src={t2} alt=" " class="img-responsive" width="50px" />
              </a>
            </li>
            <li>
              <a href="single.html">
                <img src={t4} alt=" " class="img-responsive" width="50px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
