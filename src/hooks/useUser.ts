import axios from "axios";
import { User } from "../utils/interfaces";
// import { userAtom } from "./states";
// import { useAtom } from "jotai";

export const useUserData = () => {
  //   const [user, setUser] = useAtom(userAtom);

  const getUserData = async () => {
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
  };

  const getUserById = async (id: string): Promise<User> => {
    console.log("🚀 ~ file: useUserData.ts ~ line 91 ~ getUserById ~ id", id);

    const response = await axios.get(`https://f989-187-51-208-238.ngrok-free.app//users`, {
      headers: {
        id,
      },
    });
    console.log(response.data);

    return response.data;
  };

  return {
    getUserData,
    getUserById,
    // user,
  };
};
