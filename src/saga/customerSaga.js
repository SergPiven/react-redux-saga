import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_CUSTOMERS, addCustomerAction } from "../store/customerReducer";

const fetchCustomersFromAPI = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

function* fetchAddCustomerWorker() {
  const data = yield call(fetchCustomersFromAPI);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addCustomerAction(json));
}

export function* customerWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, fetchAddCustomerWorker);
}
