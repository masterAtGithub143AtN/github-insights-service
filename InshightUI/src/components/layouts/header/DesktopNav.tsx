// components/DesktopNav.tsx
import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
      <NavItem to="/" label="Home" />
      <NavItem to="/explore" label="Explore" />
      <NavItem to="/about" label="About" />
    </nav>
  );
}