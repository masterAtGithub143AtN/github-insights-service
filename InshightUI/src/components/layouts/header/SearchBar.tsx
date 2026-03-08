// components/SearchBar.tsx
import { HiMagnifyingGlass } from "react-icons/hi2";

interface SearchBarProps {
  mobile?: boolean;
}

export default function SearchBar({ mobile = false }: SearchBarProps) {
  return (
    <div
      className={`flex items-center rounded-full px-4 py-2 transition-colors ${
        mobile
          ? "bg-white dark:bg-gray-800"
          : "bg-gray-100 dark:bg-gray-900 w-80"
      }`}
    >
      <HiMagnifyingGlass className="text-gray-500 dark:text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search repositories..."
        className="bg-transparent outline-none text-sm w-full text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
      />
    </div>
  );
}