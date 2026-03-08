// components/AuthDivider.tsx
export default function AuthDivider() {
  return (
    <div className="flex items-center my-6">
      <div className="flex-grow border-t"></div>
      <span className="px-3 text-sm text-gray-400">or</span>
      <div className="flex-grow border-t"></div>
    </div>
  );
}