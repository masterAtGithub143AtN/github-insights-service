// components/AuthButton.tsx

interface AuthButtonProps {
  label: string;
  full?: boolean;
  onClick?: () => void;
}

export default function AuthButton({ label, full = false, onClick }: AuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 py-2 px-5 rounded-lg text-sm font-medium text-white transition ${
        full ? "w-full" : ""
      }`}
    >
      {label}
    </button>
  );
}