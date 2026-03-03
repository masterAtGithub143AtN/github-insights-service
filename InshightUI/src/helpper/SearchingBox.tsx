import { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchingBox() {
  const [category, setCategory] = useState("Experience Level");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const categories = ["Beginner", "Intermediate", "Advanced"];

  // ✅ Proper outside click handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full px-4 sm:grid sm:grid-cols-10">
      {/* Left spacing only on desktop */}
      <div className="hidden sm:block sm:col-span-1"></div>

      <form className="w-full sm:col-span-9">
        <div className="flex w-full rounded-full border border-gray-700 bg-[#1f2937]">

          {/* 🔽 Dropdown */}
        <div className="relative shrink-0" ref={dropdownRef}>
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      setOpen((prev) => !prev);
    }}
    className="flex items-center px-3 sm:px-4 py-2 bg-[#111827] border-r border-gray-600 text-gray-300 text-sm"
  >
    <span className="mr-1">{category}</span>
    <HiChevronDown className="w-4 h-4" />
  </button>

  {open && (
  <div className="absolute left-0 top-full mt-2 w-44 bg-[#1f2937] border border-gray-700 rounded-xl shadow-2xl z-50">
    {categories.map((item) => (
      <div
        key={item}
        onClick={() => {
          setCategory(item);
          setOpen(false);
        }}
        className="px-4 py-2 text-sm text-gray-300 hover:bg-[#374151] cursor-pointer"
      >
        {item}
      </div>
    ))}
  </div>
)}
</div>

          {/* 🔎 Input */}
          <input
            type="search"
            placeholder="Search Open Source Projects..."
            className="flex-1 min-w-0 px-3 sm:px-4 py-2 bg-[#1f2937] text-gray-200 placeholder-gray-400 outline-none text-sm"
          />

          {/* 🔍 Search Button */}
          <button
            type="submit"
            className="shrink-0 flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm"
          >
            <HiMagnifyingGlass className="w-4 h-4" />
            <span className="hidden sm:inline ml-1">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}