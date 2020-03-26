import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addPart } from "../../actions/partsActions";

class PartInput extends Component {
  constructor() {
    super();
    this.state = {
      part_number: "",
      part_name: "",
      qty: ""
    };
  }
  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    this.setState({
      // name: e.target.value
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // debugger;
    this.props.addPart(this.state.name, this.props.order);
    // this.props.addPrt({ name: this.state.name }, this.props.order);

    this.setState({
      // name: ""
      part_number: "",
      part_name: "",
      qty: ""
    });
  };

  render() {
    return (
      <Form className="new-part-form" onSubmit={e => this.handleSubmit(e)}>
        <h4>Add Part To Order</h4>
        {/* <Form.Field> */}
        {/* <label className="form-label">Part Number</label> */}
        {/* <input
            id="part_number"
            required
            value={this.state.part_number}
            onChange={e => this.handleChange(e)}
          /> */}

        <input
          id="part_number"
          name="part_number"
          placeholder="Part Number"
          value={this.state.part_number}
          onChange={e => this.handleChange(e)}
        />
        {/* </Form.Field> */}

        {/* <Form.Field> */}
        {/* <label className="form-label">Part Name</label> */}
        <input
          id="part_name"
          name="part_name"
          placeholder="Part Name"
          value={this.state.part_name}
          onChange={e => this.handleChange(e)}
        />
        {/* </Form.Field> */}

        {/* <Form.Field> */}
        {/* <label className="form-label">Qty</label> */}
        <input
          id="qty"
          name="qty"
          placeholder="Qty"
          value={this.state.qty}
          onChange={e => this.handleChange(e)}
        />
        {/* </Form.Field> */}

        <Button basic type="submit">
          Add Part
        </Button>
        <hr />
      </Form>
    );
  }
}

export default connect(null, { addPart })(PartInput);
