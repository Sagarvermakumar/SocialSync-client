import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const connectSocialAccountApi = async (platform) => {
  const response = await axios.get(
    `${apiUrl}/api/v1/social-accounts/connect/${platform}`,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      credentials: true,
    }
  );

  return response.data;
};
