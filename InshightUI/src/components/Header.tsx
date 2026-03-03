import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";  // Fixed import
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();  // ✅ Works now
  const isAuthenticated = true;

  const handleLogout = () => {
    // Add real logout logic here (clear tokens, etc.)
    navigate("/login");
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white transition-colors";

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-2 items-center">
          <div className="flex items-center">
            <img src="/logo.png" className="mr-2 h-8" alt="GI Logo" />
            <span className="text-xl font-semibold text-white">GitHub Insights</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 mx-auto">
              {isAuthenticated && (
                <>
                  <NavLink to="/" end className={navClass}>Home</NavLink>
                  <NavLink to="/insights" className={navClass}>Insights</NavLink>
                  <NavLink to="/profile" className={navClass}>Profile</NavLink>
                </>
              )}
            </div>
            <div>
              {isAuthenticated ? (
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" className="mr-2 h-8" alt="GI Logo" />
            <span className="text-xl font-semibold text-white">GitHub Insights</span>
          </div>
          <button className="text-white text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 mt-4 px-4">
            {isAuthenticated ? (
              <>
                <NavLink to="/" end className={navClass} onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/insights" className={navClass} onClick={() => setOpen(false)}>Insights</NavLink>
                <NavLink to="/profile" className={navClass} onClick={() => setOpen(false)}>Profile</NavLink>
                <button 
                  className="text-left text-red-400 hover:text-red-300 py-2"
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={navClass} onClick={() => setOpen(false)}>Login</NavLink>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
