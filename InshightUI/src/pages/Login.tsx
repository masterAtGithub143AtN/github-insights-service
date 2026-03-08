// pages/Login.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useLogin from "../hooks/useLogin";

import AuthCard from "../components/authentication/AuthCard";
import AuthDivider from "../components/authentication/AuthDivider";
import AuthInput from "../components/authentication/AuthInput";
import GithubButton from "../components/authentication/GithubButton";
import PasswordInput from "../components/authentication/PasswordInput";
import AuthButton from "../components/layouts/header/AuthButton";

export default function Login() {
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <AuthCard
      title="GitHub Insights"
      subtitle="Discover the best open-source projects"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e:any) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <AuthButton
          label={loading ? "Signing in..." : "Sign In"}
          full
        />

      </form>

      <AuthDivider />

      <GithubButton />

      <p className="text-sm text-center text-gray-500 mt-6">
        Don’t have an account?
        <Link
          to="/signup"
          className="text-indigo-600 ml-1 font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>

    </AuthCard>
  );
}