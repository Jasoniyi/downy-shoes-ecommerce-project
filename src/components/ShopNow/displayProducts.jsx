import React, { useState } from "react";

import "./displayProducts.css";
import "./Modal/modal.css";
import Cart from "./Modal/Cart";

import Fade from "react-reveal/Fade";

import { connect } from "react-redux";
import { addToCart } from "./Action/cartActions";

const DisplayProducts = ({ items, addToCart }) => {
  const [modal, setModal] = useState(false);

  const handleClick = (id) => {
    setModal(true);
    addToCart(id);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  console.log("state", items);

  return (
    <>
      {/* ---- modal ---- */}
      {modal ? (
        <Fade right>
          <div className="modal-wrapper">
            <span>
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={closeModal}
              ></i>
            </span>
            <div className="modal-body">
              <Cart />
            </div>
            <div className="modal-footer">
              <p>Sub-total:</p>
              <button>checkout</button>
            </div>
          </div>
        </Fade>
      ) : null}

      {/* ----- /modal ---- */}

      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" style={{ marginTop: "1em" }}>
            <div className="card">
              <span
                className="new-tag"
                style={{ backgroundColor: `${item.color}` }}
              >
                New
              </span>
              <div className="card-image">
                <img src={item.image} alt="dads" width="95%" />
                <span className="card-title pdct-title">{item.name}</span>
              </div>
              <div className="card-content">
                <div className="buy-pdct">
                  <div className="price">
                    <p>{item.price}</p>
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
                  <div className="cart">
                    <button onClick={() => handleClick(item.id)}>
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProducts);
