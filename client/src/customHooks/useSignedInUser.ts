import { useEffect, useState } from "react";
import type { SignedInUser } from "../interfaces/types";
import apiClient from "../utilities/apiClient";

export default function useSignedInUser() {
  const [loggedInUser, setLoggedInUser] = useState<SignedInUser | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get("/auth/signin");

        setLoggedInUser(res.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch user");

        setLoggedInUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { loggedInUser, error, loading };
}
