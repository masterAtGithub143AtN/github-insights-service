// components/MobileMenu.tsx
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";

export default function MobileMenu() {
  return (
    <div className="lg:hidden bg-gray-100 dark:bg-gray-900 px-4 py-4 space-y-4 transition-colors">
      <SearchBar mobile />

      <div className="flex flex-col gap-3">
        <NavItem to="/" label="Home" />
        <NavItem to="/explore" label="Explore" />
        <NavItem to="/about" label="About" />
      </div>

      <AuthButton label="Login" full />
    </div>
  );
}