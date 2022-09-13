import axios from "axios";
import {
  ALL_TASKS_REQUEST,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_FAIL,
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

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
