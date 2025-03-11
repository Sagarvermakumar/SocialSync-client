import {
  CREATE_CONNECTION_FAILURE,
  CREATE_CONNECTION_REQUEST,
  CREATE_CONNECTION_SUCCESS,
} from "./actionTypes";
import { connectSocialAccountApi } from "./api";

export const connectSocialAccount = (platform) => async (dispatch) => {
  dispatch({
    type: CREATE_CONNECTION_REQUEST,
  });

  try {
    const data = await connectSocialAccountApi(platform);
    dispatch({
      type: CREATE_CONNECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CONNECTION_FAILURE,
      payload: error.response?.data || "Registration failed",
    });
  }
};
