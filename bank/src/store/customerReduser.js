const defaultState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';


export const customerReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payLoad]}
    case ADD_MANY_CUSTOMERS:
      return {...state, customers: [...state.customers, ...action.payLoad]}

    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payLoad)}

    default:
      return state
  }
}

export const addCustomerAction = (payLoad) => ({type: ADD_CUSTOMER, payLoad});
export const addManyCustomersAction = (payLoad) => ({type: ADD_MANY_CUSTOMERS, payLoad});
export const removeCustomerAction = (payLoad) => ({type: REMOVE_CUSTOMER, payLoad});