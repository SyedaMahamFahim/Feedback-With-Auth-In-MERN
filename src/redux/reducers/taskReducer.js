import {
  ALL_TASKS_REQUEST,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_FAIL,
  // NEW_TASK_REQUEST,
  // NEW_TASK_SUCCESS,
  // NEW_TASK_RESET,
  // NEW_TASK_FAIL,
  // UPDATE_TASK_RESET,
  // DELETE_TASK_REQUEST,
  // DELETE_TASK_SUCCESS,
  // DELETE_TASK_FAIL,
  // DELETE_TASK_RESET,
  // TASK_DETAILS_REQUEST,
  // TASK_DETAILS_FAIL,
  // TASK_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../storeConstants/tasksConstant";

export const tasksReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case ALL_TASKS_REQUEST:
      return {
        loading: true,
        tasks: [],
      };

    case ALL_TASKS_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
      };
    case ALL_TASKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
