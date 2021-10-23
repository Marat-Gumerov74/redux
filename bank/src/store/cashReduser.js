const defaultState = {
  cash: 0,
}

export const cashReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payLoad}
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payLoad}

    default:
      return state
  }
}