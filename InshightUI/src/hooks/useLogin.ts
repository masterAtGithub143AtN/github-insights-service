// hooks/useLogin.ts

import { useState } from "react";
import { loginRequest } from "../services/authService";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError("");

    try {
      const data = await loginRequest(email, password);

      // store token
      localStorage.setItem("token", data.token);

      return data;

    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
}