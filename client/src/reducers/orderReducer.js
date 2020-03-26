let newOrder;
export default (state = { orders: [], parts: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_ORDERS":
      return {
        ...state,
        loading: true
      };

    case "FETCH_ORDERS":
      return {
        orders: action.payload,
        loading: false
      };
    case "ADD_ORDER":
      console.log("got order to add");
      return {
        ...state,
        loading: true
      };

    case "ORDER_ADDED":
      // debugger;
      return {
        orders: [...state.orders, action.payload],
        loading: false
      };

    case "DELETE_ORDER":
      return {
        ...state,
        loading: false,
        orders: state.orders.filter(order => order.id !== action.payload.id)
      };
    case "FETCH_PARTS":
      return {
        ...state,
        loading: false,
        parts: action.payload
      };

    case "LOADING_PARTS":
      return { ...state, loading: true };

    case "CREATE_PART":
      newOrder = {
        ...action.payload.order,
        parts: [...action.payload.order.parts, action.payload.part]
      };
      // debugger;
      return {
        ...state,
        orders: [
          ...state.orders
            .filter(g => g.id !== action.payload.order.id)
            .concat(newOrder)
        ]
      };

    case "DELETE_PART":
      newOrder = {
        ...action.payload.order,
        parts: action.payload.order.parts.filter(
          t => t.id !== action.payload.part.id
        )
      };
      return {
        ...state,
        orders: [
          ...state.orders
            .filter(g => g.id !== action.payload.order.id)
            .concat(newOrder)
        ]
      };

    default:
      return state;
  }
};
