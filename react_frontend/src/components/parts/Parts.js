import React, {Component} from 'react';
import Part from './Part'


class Parts extends Component {
  render() {
      // debugger
    const { parts, order } = this.props

    const partList = parts.map((part, index) => {
      return <Part key={index} order={order} part={part}/>
    })

    return (
      <div>
        <ul>
          {partList}
        </ul>
      </div>
    )
  }
}

export default Parts;