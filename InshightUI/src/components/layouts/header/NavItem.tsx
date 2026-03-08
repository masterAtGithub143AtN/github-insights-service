// components/NavItem.tsx
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
}

export default function NavItem({ to, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
      }
    >
      {label}
    </NavLink>
  );
}