import axios from "axios";
import { useEffect, useState } from "react";

interface IUseFetch {
  endpoint: string;
  method?: "get" | "post" | "put" | "delete";
  body?: any;
  headers?: any;
}

export const useFetch = (params: IUseFetch) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: params.method || "get",
        url: `${process.env.REACT_APP_BACKEND_URL}${params.endpoint}`,
        data: params.body,
        headers: params.headers,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
