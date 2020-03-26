import React, { Component } from "react";
import Part from "./Part";
import { connect } from "react-redux";
import { fetchParts } from "../../actions/partsActions";

class PartsNotPicked extends Component {
  componentDidMount() {
    this.props.fetchParts();
  }
  render() {
    // debugger;
    const partList = this.props.parts.map(part => {
      return <Part key={part.id} id={part.id} part={part} />;
    });

    return (
      <div>
        <h3>Parts Not Picked List</h3>
        <ul>{partList}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // debugger;
  return {
    parts: state.orderReducer.parts.filter(part => !part.picked)
    // orders: state.orderReducer.orders
  };
};

export default connect(mapStateToProps, { fetchParts })(PartsNotPicked);
// export default PartsNotPicked;
