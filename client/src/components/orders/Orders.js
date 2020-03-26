import React, { Component } from "react";
import Order from "./Order";
// import { connect } from 'react-redux'

function Orders(props) {
  const ordersIndex = props.orders.map(order => {
    return <Order key={order.id} order={order} />;
  });

  return (
    <ul>
      <h2 className="orderIndex">Orders List:</h2>
      <hr></hr>
      {ordersIndex}
    </ul>
  );
}

export default Orders;
