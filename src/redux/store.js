import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./reducers/taskReducer";
import {userReducer} from "./reducers/userReducer";

const reducer = combineReducers({
  tasks: tasksReducer ,
  user: userReducer,
});



const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
