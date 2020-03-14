import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addPart } from '../../actions/PartsActions'


class PartInput extends Component {
  constructor() {
    super()
    this.state = {
      part_number: "",
      part_name: "",
      qty: ""
    }
  }
  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name, value)
    this.setState({
      [name] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPrt({name: this.state.name}, this.props.order)
    
    this.setState({
        part_number: "",
        part_name: "",        
        qty: ""
    })
  }

  render() {
    return (
      <Form className="new-part-form" onSubmit={(e) =>this.handleSubmit(e)}>

        <Form.Field>
          <label className="form-label">Part Number</label>
          <input
            id="part_number"
            required value={this.state.part_number}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>

        <Form.Field>
          <label className="form-label">Part Name</label>
          <input
            id="part_name"
            required value={this.state.part_name}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>

        <Form.Field>
          <label className="form-label">Qty</label>
          <input
            id="qty"
            required value={this.state.qty}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>
 
       <Button basic type="submit">Add Part</Button>
       <hr/>
     </Form>
    )
  }
}

export default connect(null, { addPart })(PartInput)
