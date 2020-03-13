export const  fetchOrders = () => {
    console.log('fetching orders')
    // debugger
    return (dispatch) => {
      
      dispatch({type: 'LOADING_ORDERS'})
        return fetch('http://localhost:3001/orders')
          .then(response => response.json())
          .then(orders => dispatch({
            type: 'FETCH_ORDERS',
            payload: orders}))
    }
  }
// export function fetchOrders() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_ORDERS' });
//     fetch('http://localhost:3001/orders')
//       .then(response => response.json())
//       .then(orders => dispatch({ type: 'FETCH_ORDERS', payload: orders }));
//   };
// }

  //DELETE ORDER
// export const deleteOrder = order_id =>{
//   console.log('deleting order')
//   let data = {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
//   return dispatch => {
//     fetch(`http://localhost:3001/orders/${order_id}`, data)
//       .then(response => response.json())
//       .then(order => dispatch({
//         type: 'DELETE_ORDER',
//         payload: order
//       }))
//       .catch(err => err)
//   }
// }