// pages/LoginWithGithub.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginWithGithub() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const errorParam = params.get("error");

    // Case 1: GitHub denied access
    if (errorParam) {
      setError("GitHub authentication was cancelled or failed.");
      setLoading(false);
      return;
    }

    // Case 2: Token received
    if (token) {
      localStorage.setItem("token", token);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

      return;
    }

    // Case 3: No token returned
    setError("Authentication failed. Please try again.");

    setLoading(false);

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Authenticating with GitHub...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Login Failed
        </h2>

        <p className="text-gray-600 mb-6">
          {error}
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Back to Login
        </button>

      </div>

    </div>
  );
}