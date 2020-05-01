import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import ShopNow from "./components/ShopNow";
import Contact from "./components/Contact";
import ShopItem from "./components/ShopItem";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

import Layout from "./components/Hoc/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Layout>
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/shop" component={ShopNow} />
          <Route path="/contact" component={Contact} />
          <Route path="/item/:id" component={ShopItem} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={Payment} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
