import React from "react";

const index = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="row">
        <div className="col-md-7 newsletter-text">
          <h3>Sign up for Newsletter</h3>
        </div>
        <div className="col-md-5 newsletter-form">
          <form>
            <input
              type="email"
              placeholder="Enter your email Address"
              name="email"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
