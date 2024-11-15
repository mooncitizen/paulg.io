"use client";

import { useEffect } from "react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.title = "Paul Gardiner - Software Engineer - Edinburgh, UK";
  }, []);
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="">{children}</div>
      </div>
    </main>
  );
}
