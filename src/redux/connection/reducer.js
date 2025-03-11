import {
    CREATE_CONNECTION_FAILURE,
    CREATE_CONNECTION_REQUEST,
    CREATE_CONNECTION_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    connectedAccount: null,
    loading: false,
    error: null,
    message: null,
  };
  
  export const connectSocialAccountReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CONNECTION_REQUEST:
        return { ...state, loading: true, error: null, message: null };
  
      case CREATE_CONNECTION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          message: "Connected",
          connectedAccount: "Facebook",
        };
  
      case CREATE_CONNECTION_FAILURE:
        return { ...state, loading: false, error: "Some Error Occurred" };
  
      default:
        return state; // Add this line to return the current state if no action is matched
    }
  };
  