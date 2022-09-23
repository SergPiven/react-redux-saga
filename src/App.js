import { useDispatch, useSelector } from "react-redux";
import { removeCustomerAction } from "./store/customerReducer";

import "./App.css";
import { asyncAddCashAction, asyncGetCashAction } from "./store/cashReducer";
import { fetchCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customers.customers);

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };
 

  
  console.log(cash);
  return (
    <div className={"app"}>
      <div className={"count"}>{cash}</div>
      <div>
        <button
          className={"btn"}
          onClick={() => dispatch(asyncAddCashAction())}
        >
          INCREMENT
        </button>
        <button
          className={"btn"}
          onClick={() => dispatch(asyncGetCashAction())}
        >
          DICREMENT
        </button>
        <button
          className={"btn"}
          onClick={() => dispatch(fetchCustomerAction())}
        >
          ADD USER
        </button>
      </div>

      <div className="users">
        {customer.map((customer) => (
          <div className="user" onClick={() => removeCustomer(customer)}>
            {customer.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
