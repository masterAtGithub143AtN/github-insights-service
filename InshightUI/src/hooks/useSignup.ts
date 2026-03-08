// hooks/useSignup.ts

import { useState } from "react";
import { signupRequest } from "../services/authService";

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError("");

    try {
      const data = await signupRequest(name, email, password);

      localStorage.setItem("token", data.token);

      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
}