"use client";

import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="w-full">
      <div className="w-full space-y-16">
        {children}
      </div>
      
      <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Paul Gardiner. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
