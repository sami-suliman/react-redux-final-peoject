import React, { Component } from 'react';
import Order from './Order'
import { connect } from 'react-redux'

class Orders extends Component {
  render() {
    // debugger
    // const { orders } = this.props

    const ordersIndex = this.props.orders.map(order => {
      // debugger
      return (
        <Order key={order.id} order={order} />
      )
  })
    return (
      <ul>
        <h2 className="orderIndex">Orders List:</h2>
        <hr></hr>
        {ordersIndex}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders
  }
}

export default connect(mapStateToProps)(Orders)