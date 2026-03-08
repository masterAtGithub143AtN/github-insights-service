// pages/Signup.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useSignup from "../hooks/useSignup";

import AuthCard from "../components/authentication/AuthCard";
import AuthDivider from "../components/authentication/AuthDivider";
import AuthInput from "../components/authentication/AuthInput";
import GithubButton from "../components/authentication/GithubButton";
import PasswordInput from "../components/authentication/PasswordInput";
import AuthButton from "../components/layouts/header/AuthButton";

export default function Signup() {
  const navigate = useNavigate();
  const { signup, loading, error } = useSignup();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signup(name, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start exploring open source"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>

        <AuthInput
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(e:any) => setName(e.target.value)}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e:any) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          placeholder="Create password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <AuthButton
          label={loading ? "Creating account..." : "Sign Up"}
          full
        />

      </form>

      <AuthDivider />

      <GithubButton />

      <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?
        <Link
          to="/login"
          className="text-indigo-600 ml-1 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>

    </AuthCard>
  );
}