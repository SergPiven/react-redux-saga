const defaultState = {
  customers: [],
};

export const ADD_CUSTOMERS = "ADD_CUSTOMERS";
export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMERS:
      return { ...state, customers: action.payload };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customers) => customers.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMERS,
  payload,
});

export const fetchCustomerAction = () => ({
  type: FETCH_CUSTOMERS,
});

export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
