import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { addOrder } from '../../actions/OrdersActions';
import { connect } from 'react-redux'


class OrderInput extends Component {
  constructor() {
    super()
    this.state = {
        order_date: "",
        station: "",
        user_name: "",
        count: 0
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addOrder(this.state);
    this.setState({
        order_date: "",
        station: "",
        user_name: ""
    })
  }

  render() {
    return(
      <Form className="new-order-form" onSubmit={this.handleSubmit}> 
      <h5 style={{fontSize: '50px', fontFamily: 'Big Shoulders Display'}}>New Order Form</h5>
      <hr></hr>       
        <Form.Field>
          <label className="form-label">Order Date</label>
          <input
            id="order_date"
            required value={this.state.order_date}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>

        <Form.Field>
          <label className="form-label">Station</label>
          <input
            id="station"
            required value={this.state.station}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>

        <Form.Field>
          <label className="form-label">Operator</label>
          <input
            id="user_name"
            required value={this.state.user_name}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>

        <Button basic type="submit">Add Order</Button>
      </Form>

    )
  }
}

export default connect(null, { addOrder })(OrderInput);
