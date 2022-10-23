import axios from "axios";
import {
  ALL_TASKS_REQUEST,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_FAIL,
  NEW_TASK_REQUEST,
  NEW_TASK_SUCCESS,
  NEW_TASK_FAIL,
  CLEAR_ERRORS,
} from "../storeConstants/tasksConstant";

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TASKS_REQUEST });
    let link = `api/v1/todo/all-todos`;

    const { data } = await axios.get(link);
    dispatch({
      type: ALL_TASKS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ALL_TASKS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addTasks = ({description,status,title}) => async (dispatch) => {
  try {
    dispatch({ type: NEW_TASK_REQUEST });
    let link = `api/v1/todo/add-todo`;

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(link,{description,status,title},config);
    
    dispatch({
      type: NEW_TASK_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: NEW_TASK_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
