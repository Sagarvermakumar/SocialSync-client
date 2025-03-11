import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const createUserApi = async (userData) => {
  const response = await axios.post(
    `${apiUrl}/api/v1/auth/register`,
    userData,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      credentials: true,
    }
  );
  return response.data;
};

export const loginUserApi = async (userData) => {
  const response = await axios.post(`${apiUrl}/api/v1/auth/login`, userData, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    credentials: true,
  });

  return response.data;
};

export const logoutUserApi = async () => {
  const response = await axios.get(`${apiUrl}/api/v1/logout`, {
    withCredentials: true,
  });
  return response.data;
};

export const getUserProfileApi = async () => {
  const response = await axios.get(`${apiUrl}/api/v1/auth/me`, {
    withCredentials: true,
  });
  return response.data;
};

export const changePasswordApi = async (passwordData) => {
  const response = await axios.put(
    `${apiUrl}/api/v1/change-password`,
    passwordData
  );
  return response.data;
};
