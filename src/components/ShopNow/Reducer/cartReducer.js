import { productList } from "../products";
import {
  ADD_TO_CART,
  REMOVE_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "../Action/cartActions";

const initialState = {
  items: productList,
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((items) => items.id === action.id);
      // check if action.id exists in addedItems
      let existedItem = state.addedItems.find((item) => action.id === item.id);
      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        // calculate new total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    //delete item
    case REMOVE_CART:
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let newItems = state.addedItems.filter((item) => action.id !== item.id);

      //calculating total
      newItems.quantity = 1;
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log("added removed", itemToRemove);
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
      };

    //add total of items
    case ADD_QUANTITY:
      let toAddedItems = state.items.find((item) => item.id === action.id);
      toAddedItems.quantity += 1;
      let newAddedTotal = state.total + toAddedItems.price;
      return {
        ...state,
        total: newAddedTotal,
      };

    //default
    default:
      return state;
  }
};

export default cartReducer;
