const defaultState = {
  customers: []
}


export const customerReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {...state, cash: state.cash + action.payLoad}
    case 'GET_CUSTOMER':
      return {...state, cash: state.cash - action.payLoad}

    default:
      return state
  }
}