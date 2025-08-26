import { useEffect, useState } from "react";
import type { Post } from "../interfaces/types";
import apiClient from "../utilities/apiClient";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { updateTotalPosts } from "../slices/paginationSlice";

export const useArticles = () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [error, setError] = useState();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    apiClient
      .get("/article")
      .then((response) => {
        setArticles(response.data);
        dispatch(updateTotalPosts(response.data.length));
      })
      .catch((error) => setError(error.message));
  }, []);

  return { articles, error };
};
