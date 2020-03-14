import React, { Component } from 'react'
import { connect } from 'react-redux'
import Orders from '../components/order/Orders'
import { Container } from 'semantic-ui-react';
// import OrderInput from '../components/order/OrderInput'
import { fetchOrders } from '../actions/OrdersActions'


class OrdersContainer extends Component {
    componentDidMount(){
      this.props.fetchOrders()
      // debugger
    }

    render() {
      return (
        <div>
        
          {/* <OrderInput /> */}
          <br/>
          <hr/>
          <Orders />
        
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  // debugger
  return ({
    orders: state.orderReducer.orders
  })
}   

  export default connect(mapStateToProps, { fetchOrders })(OrdersContainer);