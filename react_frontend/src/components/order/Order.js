import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import PartsContainer from '../../containers/PartsContainer'
import { deleteOrder } from '../../actions/OrdersActions'
import Part from '../parts/Part'


  class Order extends Component {
    handleClick(){
      this.props.deleteOrder(this.props.order.id)
    }

    render(){
      // debugger
      const { order } = this.props
      const partsOrder =  order.parts.map( part => <Part  part={part} />)

      return (
        <div > 
          <h3>Station: {order.station}</h3>
          <h4>Operator: {order.user_name}</h4>
          <h3>Parts Order </h3>
          <h4>{partsOrder}</h4>
          <Button basic variant="primary" onClick={ () => this.handleClick() }>Delete order</Button>          
          <PartsContainer order={order}/>
        </div>

        
        //   <Grid >
        //     <Grid.Column>
        //       <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
        //         <Card.Content >
        //           <strong>order: {order.station}</strong>
        //           <br/>
        //           Part: {order.parts}
        //           <br/>
        //           <br/>
        //           {/* <Button basic color='grey' size='mini' variant="primary" onClick={ () => this.handleClick() }>Delete order</Button> */}
        //         </Card.Content>
        //         <br/>
        //         <Card.Content extra>
        //           <PartsContainer order={order}/>
        //         </Card.Content>
        //         <br></br>
        //     </Card>
        //   </Grid.Column>
        // </Grid>
        )
    }
  }

  export default connect(null, { deleteOrder })(Order);
  // export default connect(null, {  })(Order);
