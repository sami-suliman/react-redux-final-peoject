import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../actions/ordersActions";
// import Parts from "../components/parts/Parts";
import PartInput from "../components/parts/PartInput";

class PartsContainer extends Component {
  componentDidMount() {
    // debugger;
    this.props.fetchOrders(this.props.order.id);
  }

  render() {
    // debugger;
    return (
      <div>
        <h4>Part Not Picked</h4>
        <PartInput order={this.props.order} />
      </div>
    );
  }
}

export default connect(null, { fetchOrders })(PartsContainer);
