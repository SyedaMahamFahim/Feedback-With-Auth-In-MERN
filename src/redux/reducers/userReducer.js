import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../storeConstants/userConstant";

// Reducer state ko update nhi krta new state send karta han

// Reducer jab bhi bane ga 2 parameters ley ga
// 1) INITIAL_STATE
// 2) Action

// Reducers humesha aik initial state leta han jo hume user/ frontend mai dekhnei hoti han
// yahan par initital state
const INITIAL_STATE = {
  user: {}, // qk jab user 1st time visit karye ag toh koi bhi user nhi hona chahiye. blank hona chahiye jiskki wajah sy yahan par user object blank han.
};

// 2nd parameter
// action
// action mai humare pass 2 parametrs aate han
// type field aur payload

// action ={
//   type:"LOGIN_REQUEST",
//   payload:{
//     user:"Maham"
//   }
// }

// action.payload ---> jo bhi humare pass api sy response aaraha han wo payload han

// for example
// http://localhost:8000/api/v1/user/logout is api sy response aik object ki surat ma aaraha han. 
// {
//   "success": true,
//   "message": "Logged Out"
// } 
// api response 
// toh yeh pura object humare pass action.payload han. 


// Request - user request karye ga server sy 
// success - user ko positive response mila 
// error - server error etc mile

export const userReducer = (state = INITIAL_STATE, action) => {


  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
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
