import React from "react";

import { connect } from "react-redux";
import { removeItem } from "../ShopNow/Action/cartActions";

import { Table } from "react-bootstrap";

import CatalogCarousel from "../Home/Catalog/catalogCarousel";
import Newsletter from "../Home/Newsletter";

import "./checkout.css";

const Index = ({ items, removeItem, total }) => {
  console.log("checkout", items);

  // handle delete items
  const handleItemDelete = (id) => {
    removeItem(id);
  };

  return (
    <div className="checkout-wrappper">
      <div className="container">
        <h3>Checkout</h3>
        <p>Your shopping cart contains: {items.length} Products</p>
        <div className="checkout-table">
          <Table bordered responsive="md">
            <thead className="table-header">
              <th>SL No.</th>
              <th colSpan="2">Product</th>
              <th>Quatity</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Remove</th>
            </thead>
            {items.map((item) => (
              <tbody className="table-body" key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} alt={item.name} height="50%" />
                  </td>
                  <td></td>
                  <td>{item.quantity}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      onClick={() => handleItemDelete(item.id)}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <div className="row">
            <div className="col-md-4">
              <div className="basket-button">
                <button> continue to basket</button>
              </div>

              {items.map((product) => (
                <div className="basket-products">
                  <p>{product.name} - </p>
                  <p>{product.price}</p>
                </div>
              ))}

              <div className="bucket-total">
                <p>Total - </p>
                <p>{total}</p>
              </div>
            </div>

            {/* checkout-details */}
            <div className="col-md-8">
              <div className="checkout-details">
                <h3>Add a new Detail</h3>
                <form>
                  <div class="controls">
                    <label class="control-label">Full name: </label>
                    <input
                      class="billing-address-name form-control"
                      type="text"
                      name="name"
                      placeholder="Full name"
                    />
                  </div>
                  <div class="card_number_grids">
                    <div class="card_number_grid_left">
                      <div class="controls">
                        <label class="control-label">Mobile number:</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Mobile number"
                        />
                      </div>
                    </div>
                    <div class="card_number_grid_right">
                      <div class="controls">
                        <label class="control-label">Landmark: </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Landmark"
                        />
                      </div>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="controls">
                    <label class="control-label">Town/City: </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Town/City"
                    />
                  </div>
                  <div class="controls">
                    <label class="control-label">Address type: </label>
                    <select class="form-control option-w3ls">
                      <option>Office</option>
                      <option>Home</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <button className="checkout-form-btn">
                    Delivery to this address
                  </button>
                </form>

                <button className="payment-btn">make a payment</button>
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

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
