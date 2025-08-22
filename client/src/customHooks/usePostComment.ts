import { useEffect, useState } from "react";
import apiClient from "../utilities/apiClient";
import type { SignInFormData } from "../components/authentication/SignIn";

export default function useSigninUser(userCredentials: SignInFormData) {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const logIn = async () => {
      try {
        const res = await apiClient.post("/auth/signin", userCredentials);

        setAuthToken(res.data.token);
      } catch (err: any) {
        setError(err.message || "Failed to fetch user");

        setAuthToken(null);
      } finally {
        setLoading(false);
      }
    };

    logIn();
  }, []);

  return { authToken, error, loading };
}
