import axios from "axios";

export const useUserData = () => {
  const getUserData = async () => {
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
  };

  return {
    getUserData,
  };
};
