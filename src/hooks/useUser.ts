import axios from "axios";
import { usersAtom } from "./states";
import { useAtom } from "jotai";
import { toast } from "react-toastify";
// import { User } from "../utils/interfaces";
// import { userAtom } from "./states";
// import { useAtom } from "jotai";

export const useUserData = () => {
  //   const [user, setUser] = useAtom(userAtom);
  const [users, setUsers] = useAtom(usersAtom);

  const getUserData = async () => {
    const response = await axios.get(`${process.env.BACKEND_URL}/users`);
    return response.data;
  };

  const token = localStorage.getItem("auvp@qrcodeapp");

  const getUserById = async (id: string) => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/users`, {
        headers: {
          id,
          Authorization: `Token ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return null;
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
            Authorization: `Token ${token}`,
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
            Authorization: `Token ${token}`,
          },
        }
      );

      return true;
    } catch (error) {
      return false;
    }
  };

  const getAllUsers = async () => {
    try {

      const response = await axios.get(`${process.env.BACKEND_URL}/users/all`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUsers(response.data);
      return response.data;
    } catch (error: any) {
      return error.message || "Internal server error";
    }
  };

  const removeUser = async (cpf: string) => {
    try {
      
      await axios.delete(`${process.env.BACKEND_URL}/users/${cpf}`, {
        headers: {
          Authorization: `Token ${token}`,
          id: cpf,
        },
      });
      await getAllUsers();
      toast.success("Usuário removido com sucesso!");
      return true;
    } catch (error: any) {
      toast.error("Erro ao remover usuário!");
      return error.message || "Internal server error";
    }
  };

  return {
    getUserData,
    getUserById,
    updateUser,
    updateUserEntry,
    getAllUsers,
    removeUser,
    users,
  };
};
