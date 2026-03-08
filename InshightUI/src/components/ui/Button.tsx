interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
      : "bg-gray-900 hover:bg-gray-800 text-white";

  return <button className={`${base} ${styles}`}>{children}</button>;
}
