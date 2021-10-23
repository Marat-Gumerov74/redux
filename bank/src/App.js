import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReduser";
import {fetchCustomers} from "./asyncActions/customers";

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)
  console.log(cash);
  
  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payLoad:cash})
  }
  
  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payLoad:cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }



  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer((prompt()))}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers()) }> Получить клиентов из базы</button>
      </div>
      <div>
        {customers.length > 0 ?
          <div style={{width: "300px"}}>
            {customers.map(customer =>
              <div onClick={() => removeCustomer(customer)}
                style={{fontSize:"2rem",
                  border:"1px solid black",
                  padding: "10px",
                  marginTop: "5px"}}>
                {customer.name}
              </div>
            )}
          </div>:
          <div style={{fontsize:"2rem"}}>
            Клиенты отсутствуют.
          </div>
        }
      </div>
    </div>
  );
}

export default App;
