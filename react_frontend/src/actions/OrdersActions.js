//FETCH ORDERS
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

//FETCH ORDER
export const fetchOrder = id => {
  console.log('fetching order')
  return (dispatch) => {
    dispatch({type: 'LOADING_ORDERS'})
      return fetch(`http://localhost:3001/orders/${id}`)
        .then(response => response.json())
        .then(order => dispatch({
          type: 'FETCH_ORDER',
          payload: order}))
  }
}

//ADD ORDER
export const addOrder = orderInput => {
  console.log('adding order')
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderInput)
  }
  return dispatch => {
    fetch('http://localhost:3001/orders', data)
      .then(response => response.json())
      .then(order => dispatch({
        type: 'CREATE_ORDER',
        payload: order
      }))
      .catch(err => err)
  }
}
  // DELETE ORDER
export const deleteOrder = order_id =>{
  console.log('deleting order')
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`http://localhost:3001/orders/${order_id}`, data)
      .then(response => response.json())
      .then(order => dispatch({
        type: 'DELETE_ORDER',
        payload: order
      }))
      .catch(err => err)
  }
}