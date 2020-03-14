//FETCH PARTS
export const  fetchParts = () => {
  console.log('fetching parts')
  // debugger
  return (dispatch) => {
    
    dispatch({type: 'LOADING_PARTS'})
      return fetch('http://localhost:3001/parts')
        .then(response => response.json())
        .then(parts => dispatch({
          type: 'FETCH_PARTS',
          payload: parts}))
  }
}

//ADD PART
export const addPart = ( part, order ) => {
    console.log('adding part')
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(part)
    }
    return dispatch => {
      fetch(`http://localhost:3001/orders/${order.id}/parts`, data)
        .then(response => response.json())
        .then(part => {
          let result = {part, order}
          dispatch({
            type: 'CREATE_PART',
            payload: result
          })
        })
        .catch(err => err)
    }
  }
  
  //DELETE PART
  export const deletePart = ( part, order ) => {
    console.log('deleting part')
    let data = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    return dispatch => {
      fetch(`http://localhost:3001/orders/${order.id}/parts/${part.id}`, data)
        .then(response => response.json())
        .then(part => {
          let result = {part, order}
          dispatch({
          type: 'DELETE_PART',
          payload: result
        })
    })
      .catch(err => err)
  }
  }
  