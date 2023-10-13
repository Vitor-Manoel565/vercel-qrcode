import axios from "axios";
// import { User } from "../utils/interfaces";
// import { userAtom } from "./states";
// import { useAtom } from "jotai";

export const useUserData = () => {
  //   const [user, setUser] = useAtom(userAtom);

  const getUserData = async () => {
    const response = await axios.get(`${process.env.BACKEND_URL}/users`);
    return response.data;
  };

  const getUserById = async (id: string) => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/users`, {
        headers: {
          id,
        },
      });

      return response.data;
    } catch (error) {
      console.log("error", error);

      return undefined;
    }
  };

  const updateUser = async (
    id: string,
    validated: boolean
  ): Promise<boolean> => {
    try {
      await axios.patch(
        `${process.env.BACKEND_URL}/users/validated`,
        {
          validated,
        },
        {
          headers: {
            id,
          },
        }
      );

      return true;
    } catch (error) {
      return false;
    }
  };

  const updateUserEntry = async (
    id: string,
    validatedEntry: boolean
  ): Promise<boolean> => {
    try {
      await axios.patch(
        `${process.env.BACKEND_URL}/users/validated/entry`,
        {
          validatedEntry,
        },
        {
          headers: {
            id,
          },
        }
      );

      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    getUserData,
    getUserById,
    updateUser,
    updateUserEntry,
  };
};
