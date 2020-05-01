import React from "react";
import { Tabs } from "@yazanaabed/react-tabs";

import "./payment.css";
import Paypal from "../../images/paypal.png";

import CreditCard from "./CreditCard";
import CatalogCarousel from "../Home/Catalog/catalogCarousel";
import Newsletter from "../Home/Newsletter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
};

const Index = () => {
  return (
    <div className="payment-wrapper">
      <div className="container">
        <h3>Payment</h3>
        <div style={styles}>
          <Tabs
            activeTab={{
              id: "tab1",
            }}
          >
            <Tabs.Tab id="tab1" title="CASH ON DELIVERY (COD)" className="test">
              <div className="tab-body">
                <h4>COD</h4>
                <p>
                  We also accept Credit/Debit card on delivery. Please Check
                  with the agent.{" "}
                </p>
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="CREDIT/DEBIT">
              <div className="tab-body">
                <CreditCard />
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="NET BANKING">
              <div className="tab-body">
                <div className="pay_info">
                  <div className="vertical_post">
                    <form action="#" method="post">
                      <h5>Select From Popular Banks</h5>
                      <div className="swit-radio">
                        <div className="check_box_one">
                          <div className="radio_one">
                            {" "}
                            <label>
                              <input type="radio" name="radio" checked="" />
                              <i></i>First Bank
                            </label>{" "}
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            {" "}
                            <label>
                              <input type="radio" name="radio" />
                              <i></i>GTB
                            </label>{" "}
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            {" "}
                            <label>
                              <input type="radio" name="radio" />
                              <i></i>Sterling Bank
                            </label>{" "}
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            {" "}
                            <label>
                              <input type="radio" name="radio" />
                              <i></i>FCMB Bank
                            </label>{" "}
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            {" "}
                            <label>
                              <input type="radio" name="radio" />
                              <i></i>Zenith Bank
                            </label>{" "}
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <h5>Or SELECT OTHER BANK</h5>
                      <div className="section_room_pay">
                        <select className="year">
                          <option value="">=== Other Banks ===</option>
                          <option value="ACC-NA">Access Bank</option>

                          <option value="ECO-NA">Eco Bank</option>
                          <option value="UBA-NA">UBA</option>

                          <option value="IBTC-NA">Stanbic IBTC</option>
                        </select>
                      </div>
                      <input type="submit" value="PAY NOW" />
                    </form>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab4" title="PAYPAL ACCOUNT">
              <div className="tab-body">
                <div className="pay_info">
                  <div className="col-md-6 tab-grid">
                    <img className="pp-img" src={Paypal} alt="paypal" />
                    <p>
                      Important: You will be redirected to PayPal's website to
                      securely complete your payment.
                    </p>
                    <button className="btn btn-primary">
                      Checkout via Paypal
                    </button>
                  </div>
                  <div className="col-md-6">
                    <form className="cc-form">
                      <div className="clearfix">
                        <div className="form-group form-group-cc-number">
                          <label>Card Number</label>
                          <input
                            className="form-control"
                            placeholder="xxxx xxxx xxxx xxxx"
                            type="text"
                          />
                          <span className="cc-card-icon"></span>
                        </div>
                        <div className="form-group form-group-cc-cvc">
                          <label>CVV</label>
                          <input
                            className="form-control"
                            placeholder="xxxx"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="clearfix">
                        <div className="form-group form-group-cc-name">
                          <label>Card Holder Name</label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group form-group-cc-date">
                          <label>Valid Thru</label>
                          <input
                            className="form-control"
                            placeholder="mm/yy"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="checkbox checkbox-small">
                        <label>
                          <input
                            className="i-check"
                            type="checkbox"
                            checked="false"
                          />
                          Add to My Cards
                        </label>
                      </div>
                      <input
                        className="btn btn-primary submit"
                        type="submit"
                        value="Proceed Payment"
                      ></input>
                    </form>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
      <CatalogCarousel />
      <Newsletter />
    </div>
  );
};

export default Index;
