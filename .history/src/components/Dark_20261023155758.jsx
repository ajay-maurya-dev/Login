import { useState, useEffect } from "react";

export default function Dark() {
  const [isDark, setIsDark] = useState(false);

  // Sync the true/false state to the HTML document tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button 
      className="p text-2xl rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors duration-200" 
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
