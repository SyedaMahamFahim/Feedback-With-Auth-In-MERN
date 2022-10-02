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


// action kisi bhi event par perform hota han
// event matlab clicks wagera
// action hume yeh nhi bata kis par krna han. Kya cheez update krni han. aur kesy krne han.

// An action is a plain JavaScript object that has a type field.
// action aik object hoga jis mai type field naam sy hoga aik key-value pair hoga


// type link karye gi action ko reducer sy 

// agar humare pass Type: LOGIN_REQUEST han toh reducers mai LOGIN_REQUEST ki logic likhi hogi matlab kya cheez update krni han yah kuch bhi. logic wala kaam reducers mai hoga


// State update logic etc --- Reducers
// API calling --- Action. 

// to connect action -- reducer hum  type ko define karte han.  
// isAuthenticated: false,


import axios from "axios";
import { useActionData } from "react-router-dom";



export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/user/login`,
      { email, password },
      config
    );
    console.log({ data });
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    console.log({ data });
  } catch (error) {
    
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/user/register`,
      { name, email, password },
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/v1/user/profile`);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/user/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
