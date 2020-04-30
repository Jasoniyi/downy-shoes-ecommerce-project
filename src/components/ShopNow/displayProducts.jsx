import React, { useState } from "react";

import "./displayProducts.css";
import "./Modal/modal.css";
import Cart from "./Modal/Cart";

import Fade from "react-reveal/Fade";

import { connect } from "react-redux";
import { addToCart } from "./Action/cartActions";

import { Link } from "react-router-dom";

const DisplayProducts = ({ items, total, addToCart }) => {
  const [modal, setModal] = useState(false);

  const handleClick = (id) => {
    setModal(true);
    addToCart(id);
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
              <p>Sub-total:N{total}</p>
              <button>
                <Link to="/checkout">checkout</Link>
              </button>
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
                <div className="men-cart-pro">
                  <div className="inner-men-cart-pro">
                    <Link
                      to={{
                        pathname: `/item/${item.id}`,
                        state: { item },
                      }}
                      className="link-product-add-cart"
                    >
                      {" "}
                      Quick View
                    </Link>
                  </div>
                </div>
                <span className="card-title pdct-title">{item.name}</span>
              </div>
              <div className="card-content">
                <div className="buy-pdct">
                  <div className="price">
                    <p>N{item.price}.00</p>
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
    total: state.total,
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
