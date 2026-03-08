import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[420px] p-8 rounded-xl shadow-lg">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            GitHub Insights
          </h1>
          <p className="text-gray-500 text-sm">
            Discover the best open-source projects
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full mt-1 border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* GitHub Login */}
        <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
            className="w-5"
          />
          Continue with GitHub
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?
          <span className="text-indigo-600 cursor-pointer ml-1">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}