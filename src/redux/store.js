import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./reducers/taskReducer";
import { userReducer } from "./reducers/userReducer";

// store humesha reducers leta han
// wo bhi sirf aik
// combineReducers aik object leta han

const allReducers = {
  tasks: tasksReducer,
  user: userReducer,
};

const reducer = combineReducers(allReducers);

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
