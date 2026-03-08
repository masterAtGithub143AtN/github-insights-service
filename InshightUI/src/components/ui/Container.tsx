import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center px-6 lg:px-16 py-16">
      <div className="max-w-7xl w-full mx-auto">{children}</div>
    </section>
  );
}