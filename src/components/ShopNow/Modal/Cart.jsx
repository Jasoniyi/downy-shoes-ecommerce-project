import React from "react";
import "./modal.css";

import { connect } from "react-redux";
import { addQuantity, removeItem } from "../Action/cartActions";

import { Link } from "react-router-dom";

const Cart = ({ items, removeItem }) => {
  console.log("cart props", items);

  // handle delete items
  const handleItemDelete = (id) => {
    removeItem(id);
  };

  const handleAddQuantity = (id) => {
    addQuantity(id);
    console.log("addedQuantity", id);
  };

  return (
    <div>
      <ul className="cart-list">
        {items.length ? (
          items.map((item) => (
            <li className="cart-item" key="item.id">
              <div className="cart-details-name">{item.name}</div>
              <div className="cart-positioned-at-right">
                <div className="cart-details-quantity">
                  <Link to="/shop">
                    <i
                      className="fa fa-plus-circle increase-quantity"
                      aria-hidden="true"
                      onClick={() => handleAddQuantity(item.id)}
                    ></i>
                  </Link>

                  {/* <input
                    type="text"
                    autoComplete="off"
                    value={item.quantity}
                    pattern="[0-9]*"
                    className="cart-quantity-box"
                  /> */}
                  <b>{item.quantity}</b>
                  <span className="decrease-quantity">
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="cart-details-remove">
                  <button onClick={() => handleItemDelete(item.id)}>
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="cart-details-price">N{item.price}.00</div>
              </div>
            </li>
          ))
        ) : (
          <div>nothing</div>
        )}
        {/*  */}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },

    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
