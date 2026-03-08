// components/authentication/PasswordInput.tsx

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
}: PasswordInputProps) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
  );
}