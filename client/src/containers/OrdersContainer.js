import React, { Component } from "react";
import Orders from "../components/orders/Orders";
import { connect } from "react-redux";
import OrderInput from "../components/orders/OrderInput";
import { fetchOrders } from "../actions/ordersActions";

class OrdersContainer extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    return (
      <div>
        <OrderInput />
        <br />
        <hr />
        <Orders orders={this.props.orders} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  console.log("I am state", state);
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading
  };
};

export default connect(mapStateToProps, { fetchOrders })(OrdersContainer);
