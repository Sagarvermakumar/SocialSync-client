import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  RESET_STATE,
} from "./authActionTypes";

import {
  createUserApi,
  loginUserApi,
  logoutUserApi,
  getUserProfileApi,
  changePasswordApi,
} from "./authApi";

// Create User
export const createUser = (userData) => async (dispatch) => {
  dispatch({ type: CREATE_USER_REQUEST });
  try {
    const data = await createUserApi(userData);
    dispatch({ type: CREATE_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: error.response?.data || "Registration failed",
    });
  }
};

// Login User
export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const data = await loginUserApi(userData);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error.response?.data || "Login failed",
    });
  }
};

// Logout User
export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  try {
    const data = await logoutUserApi();
    dispatch({ type: LOGOUT_USER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAILURE,
      payload: error.response?.data || "Logout failed",
    });
  }
};

// Get User Profile
export const getUserProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const data = await getUserProfileApi();
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.response?.data || "Failed to fetch user",
    });
  }
};

// Change Password
export const changePassword = (passwordData) => async (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD_REQUEST });
  try {
    const data = await changePasswordApi(passwordData);
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAILURE,
      payload: error.response?.data || "Password change failed",
    });
  }
};

// Reset State
export const resetState = () => ({ type: RESET_STATE });
