import {
  ALL_TASKS_REQUEST,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_FAIL,
  NEW_TASK_REQUEST,
  NEW_TASK_SUCCESS,
  NEW_TASK_RESET,
  NEW_TASK_FAIL,
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

export const newTaskReducer = (state = { task: {} }, action) => {
  switch (action.type) {
    case NEW_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_TASK_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        task: action.payload.message,
      };
    case NEW_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_TASK_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
