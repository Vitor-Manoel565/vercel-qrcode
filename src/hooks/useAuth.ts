import axios from "axios";
import { useAtom } from "jotai";
import { tokenAtom } from "./states";

export const useAuth = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const getAdminToken = async (name: string, password: string) => {
    try {
      const userToken = await axios.post(
        `${process.env.BACKEND_URL}auth/signin`,
        {
          name,
          password,
        }
      );

      setToken(userToken.data.access_token);
      window.localStorage.setItem(
        "auvp@qrcodeapp",
        userToken.data.access_token
      );
      window.location.href = window.location.href.split("/")[0] + "/home";
      return;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  return {
    getAdminToken,
    token,
  };
};
