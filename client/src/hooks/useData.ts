import { useState, useEffect } from "react";
import apiClient from "../utilities/apiClient";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

function useData<T>(endPoint: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    let isMounted = true;

    setState({ data: null, isLoading: true, error: null });

    apiClient
      .get(endPoint)
      .then((res) => {
        if (isMounted)
          setState({ data: res.data, isLoading: false, error: null });
      })
      .catch((error) => {
        if (isMounted) setState({ data: null, isLoading: false, error });
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [endPoint]);

  return state;
}

export default useData;
