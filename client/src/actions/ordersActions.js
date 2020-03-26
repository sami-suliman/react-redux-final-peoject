//FETCH ORDERS
export const fetchOrders = () => {
  return dispatch => {
    dispatch({ type: "LOADING_ORDERS" });
    return fetch("/orders")
      .then(response => response.json())
      .then(orders =>
        dispatch({
          type: "FETCH_ORDERS",
          payload: orders
        })
      );
  };
};

//FETCH ORDER
export const fetchOrder = id => {
  console.log("fetching order");
  return dispatch => {
    dispatch({ type: "LOADING_ORDERS" });
    return fetch(`/orders/${id}`)
      .then(response => response.json())
      .then(order =>
        dispatch({
          type: "FETCH_ORDER",
          payload: order
        })
      );
  };
};

//ADD ORDER
export const addOrder = order => {
  return dispatch => {
    dispatch({ type: "ADD_ORDER" }, order);
    return fetch("/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(order => {
        // debugger;
        return dispatch({ type: "ORDER_ADDED", payload: order });
      });
  };
};

// DELETE ORDER
export const deleteOrder = order_id => {
  console.log("deleting order");
  let data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  return dispatch => {
    fetch(`/orders/${order_id}`, data)
      .then(response => response.json())
      .then(order =>
        dispatch({
          type: "DELETE_ORDER",
          payload: order
        })
      )
      .catch(err => err);
  };
};
