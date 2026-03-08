// components/Header.tsx
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import AuthButton from "./AuthButton";

export default function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left */}
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:block">
              <SearchBar />
            </div>
          </div>

          {/* Center */}
          <DesktopNav />

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <AuthButton label="Login" onClick={() => navigate("/login")} />
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-gray-600 dark:text-gray-300"
            >
              {open ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && <MobileMenu />}
    </header>
  );
}