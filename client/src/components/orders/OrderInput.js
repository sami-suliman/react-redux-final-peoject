import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrder } from "../../actions/ordersActions";

class OrderInput extends Component {
  constructor() {
    super();
    this.state = {
      order_date: "",
      station: "",
      user_name: "",
      loading: false
    };
  }
  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    // const order = { ...this.state };
    this.props.addOrder(this.state);
    this.setState({
      order_date: "",
      station: "",
      user_name: "",
      loading: false
    });
  };
  render() {
    return (
      <div>
        <h4>New Order Form</h4>
        <form onSubmit={this.handleOnSubmit}>
          <input
            id="order_date"
            type="text"
            placeholder="Date"
            value={this.state.order_date}
            onChange={e => this.handleOnChange(e)}
          />
          <input
            id="station"
            type="text"
            placeholder="Station No"
            value={this.state.station}
            onChange={e => this.handleOnChange(e)}
          />
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Operator Name"
            value={this.state.user_name}
            onChange={e => this.handleOnChange(e)}
          />
          <button type="submit">Add Order </button>
          <hr></hr>
        </form>
      </div>
    );
  }
}

export default connect(null, { addOrder })(OrderInput);
// import React, { Component } from "react";
// import { Button, Form } from "semantic-ui-react";
// import { addOrder } from "../../actions/ordersActions";
// import { connect } from "react-redux";

// class OrderInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       order_date: "",
//       station: "",
//       user_name: "",
//       part_number: "",
//       part_name: "",
//       qty: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addOrder(this.state);
//     this.setState({
//       order_date: "",
//       station: "",
//       user_name: "",
//       part_number: "",
//       part_name: "",
//       qty: ""
//     });
//   };

//   renderPartInputs = () => {
//     return (
//       <>
//         <Form.Field>
//           <label className="form-label">Part Number</label>
//           <input
//             id="part_number"
//             name="part_number"
//             required
//             value={this.state.part_number}
//             onChange={e => this.handleChange(e)}
//           />
//         </Form.Field>

//         <Form.Field>
//           <label className="form-label">Part Name</label>
//           <input
//             id="part_name"
//             name="part_name"
//             required
//             value={this.state.part_name}
//             onChange={e => this.handleChange(e)}
//           />
//         </Form.Field>

//         <Form.Field>
//           <label className="form-label">Qty</label>
//           <input
//             id="qty"
//             name="qty"
//             required
//             value={this.state.qty}
//             onChange={e => this.handleChange(e)}
//           />
//         </Form.Field>
//       </>
//     );
//   };

//   render() {
//     return (
//       <Form className="new-order-form" onSubmit={this.handleSubmit}>
//         <h5 style={{ fontSize: "50px", fontFamily: "Big Shoulders Display" }}>
//           New Order Form
//         </h5>
//         <hr></hr>
//         <Form.Field>
//           <label className="form-label">Order Date</label>
//           <input
//             id="order_date"
//             required
//             value={this.state.order_date}
//             onChange={e => this.handleChange(e)}
//           />
//         </Form.Field>

//         <Form.Field>
//           <label className="form-label">Station</label>
//           <input
//             id="station"
//             required
//             value={this.state.station}
//             onChange={e => this.handleChange(e)}
//           />
//         </Form.Field>

//         <Form.Field>
//           <label className="form-label">Operator</label>
//           <input
//             id="user_name"
//             required
//             value={this.state.user_name}
//             onChange={e => this.handleChange(e)}
//           />
//         </Form.Field>
//         {this.renderPartInputs()}
//         <Button basic type="submit">
//           Add Order
//         </Button>
//       </Form>
//     );
//   }
// }

// -
