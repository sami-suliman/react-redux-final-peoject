import React, {Component} from 'react';
import Part from './Part'
import { connect } from 'react-redux'


class PartsNotPicked extends Component {
  render() {
      // debugger
//     const { parts, order } = this.props

//     const partList = parts.map( part => {
//       return <Part key={index} order={order} part={part}/>
//     })

    return (
      <div>
        <h3>Parts Not Picked List</h3>
        <ul>
          {/* {partList} */}
        </ul>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   debugger
//   return {
//     parts: state.orderReducer.parts
//   }
// }

// export default connect(mapStateToProps)(PartsNotPicked)
export default PartsNotPicked;