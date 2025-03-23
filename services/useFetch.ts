import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autofetch = true
) => {
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };
  useEffect(() => {
    if (autofetch) {
      fetchData();
    }
  }, []);
  return { data, error, loading, refetch: fetchData, reset };
};
