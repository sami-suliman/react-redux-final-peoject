import React, { Component } from "react";
import { Card, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import PartsContainer from "../../containers/PartsContainer";
import { deleteOrder } from "../../actions/ordersActions";
import Part from "../parts/Part";

class Order extends Component {
  handleClick() {
    // debugger;
    this.props.deleteOrder(this.props.order.id);
  }

  render() {
    // debugger
    const { order } = this.props;
    const partsOrder = order.parts.map(part => <Part part={part} />);

    return (
      <div>
        <h3>Station: {order.station}</h3>
        <h4>Operator: {order.user_name}</h4>
        <h3>Parts Order </h3>
        <h4>{partsOrder}</h4>
        <Button basic variant="primary" onClick={() => this.handleClick()}>
          Delete order
        </Button>
        <PartsContainer order={order} />
        <hr></hr>
      </div>
    );
  }
}

export default connect(null, { deleteOrder })(Order);
// export default connect(null, {})(Order);
