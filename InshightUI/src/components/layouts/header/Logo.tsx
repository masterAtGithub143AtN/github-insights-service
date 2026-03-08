// components/Logo.tsx
export default function Logo({ title = "Github Insights" }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold">
        GI
      </div>
      <span className="text-lg font-semibold tracking-wide">
        {title}
      </span>
    </div>
  );
}