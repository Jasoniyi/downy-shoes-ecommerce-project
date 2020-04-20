import React from "react";
import "./modal.css";

import { connect } from "react-redux";
import { addQuantity, removeItem } from "../Action/cartActions";

const Cart = ({ items, removeItem }) => {
  console.log("cart props", items);

  // handle delete items
  const handleItemDelete = (id) => {
    removeItem(id);
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
                  <input
                    type="text"
                    autoComplete="off"
                    value={item.quantity}
                    pattern="[0-9]*"
                    className="cart-quantity-box"
                  />
                </div>
                <div className="cart-details-remove">
                  <button onClick={() => handleItemDelete(item.id)}>
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="cart-details-price">{item.price}</div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
