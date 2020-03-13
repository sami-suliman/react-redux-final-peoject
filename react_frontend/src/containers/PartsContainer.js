import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/OrdersActions'
import Parts from '../components/parts/Parts';


class PartsContainer extends Component {

  componentDidMount() {
    this.props.fetchOrders(this.props.order.id)
  }

  render(){
    return(
      <div>
        {/* <PartInput
          order={this.props.order}
          /> */}

        <strong>Order Parts:</strong>
        <Parts
          key={this.props.order.id}
          parts={this.props.order.parts}
          order={this.props.order}
        />
        </div>
    )
  }
}


export default connect(null, { fetchOrders })(PartsContainer);
