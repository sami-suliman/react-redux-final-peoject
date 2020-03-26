import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./stylesheets/App.css";
import Home from "./containers/Home";
import OrdersContainer from "./containers/OrdersContainer";
import OrderInput from "./components/orders/OrderInput";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={OrdersContainer} />
          <Route exact path="/orders/new" component={OrderInput} />
        </Switch>
        {/* <OrdersContainer /> */}
      </div>
    </Router>
  );
}

export default connect()(App);
