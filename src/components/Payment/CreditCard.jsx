import React, { Component } from "react";
import Cards from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";

class CreditCard extends Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="payment-form">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="card-form">
          <div className="form-group">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="name"
              placeholder="Card Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          ...
          <button className="btn btn-success pay-button">pay</button>
        </form>
      </div>
    );
  }
}

export default CreditCard;
