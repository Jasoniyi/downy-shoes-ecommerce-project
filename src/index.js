import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";

//Redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./components/ShopNow/Reducer/cartReducer";

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// to test redux in console
console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store", store.getState()));
// store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
