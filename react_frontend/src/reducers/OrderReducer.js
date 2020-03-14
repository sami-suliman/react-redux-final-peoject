let newOrder
export default function orderReducer(state = {
  orders: [],
  loading: false
}, action) {
  switch(action.type){
        case 'CREATE_ORDER':
          return {...state, orders:[...state.orders, action.payload]}
        case 'LOADING_ORDERS':
        console.log('loading orders reducer')
          return {...state, loading: true}
        case 'FETCH_ORDERS':
          // debugger
          console.log('fetch orders reducer')
          return {
            ...state,
             loading: false,
             orders: action.payload}
        case 'DELETE_ORDER':
          return{...state, loading: false, orders: state.orders.filter(order => order.id !== action.payload.id)}
        case 'FETCH_PARTS':
          return {
            ...state,
             loading: false,
             parts: action.payload
            }
        case 'LOADING_PARTS':
          return {...state, loading: true}
        

        case 'CREATE_PART':
          newOrder = {...action.payload.order, parts: [...action.payload.order.parts, action.payload.part]}
          return {...state,
            orders: [...state.orders.filter(g => g.id !== action.payload.order.id).concat(newOrder)]}

        case 'DELETE_PART':
            newOrder =  {...action.payload.order, parts: action.payload.order.parts.filter(t => t.id !== action.payload.part.id)}
            return {...state,
              orders: [...state.orders.filter(g => g.id !== action.payload.order.id).concat(newOrder)]}

        default:
          return state;
      }
    }