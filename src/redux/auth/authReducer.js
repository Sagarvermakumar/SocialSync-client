import {
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE,
    LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
    LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE,
    GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE,
    RESET_STATE,
  } from "./authActionTypes";
  
  const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: localStorage.getItem("token") ? true : false,
    message: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER_REQUEST:
      case LOGIN_USER_REQUEST:
      case LOGOUT_USER_REQUEST:
      case GET_PROFILE_REQUEST:
      case CHANGE_PASSWORD_REQUEST:
        return { ...state, loading: true, error: null };
  
      case CREATE_USER_SUCCESS:
      case LOGIN_USER_SUCCESS:
        return { ...state, loading: false, user: action.payload, isAuthenticated: true, error: null };
  
      case LOGOUT_USER_SUCCESS:
        return { ...state, loading: false, user: null, isAuthenticated: false, message: action.payload };
  
      case GET_PROFILE_SUCCESS:
        return { ...state, loading: false, user: action.payload, isAuthenticated: true };
  
      case CHANGE_PASSWORD_SUCCESS:
        return { ...state, loading: false, message: "Password changed successfully" };
  
      case CREATE_USER_FAILURE:
      case LOGIN_USER_FAILURE:
      case LOGOUT_USER_FAILURE:
      case GET_PROFILE_FAILURE:
      case CHANGE_PASSWORD_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case RESET_STATE:
        return { ...state, error: null, message: null };
  
      default:
        return state;
    }
  };
  