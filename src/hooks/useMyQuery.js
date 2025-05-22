import { useEffect, useState } from "react";
import fetcher from "../apis/fetcher";

const useMyQuery = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher.get(url);
        setData(response.data.content);
      } catch (error) {
        console.error("Loi ket noi API:", error);
        setError(error);
      } finally {
        console.log("Ket thuc goi api");
        setIsLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, error };
};

export default useMyQuery;
