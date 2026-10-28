import { useState } from "react";

function Navbar() {
    const [isDark, setIsDark] = useState(false)
  return (
    <nav className="flex items-center w-full h-10 px-10 dark:bg-white dark:text-black">
      <div className=" flex-1 text-2xl text-cyan-700 font-extrabold">LOGO</div>
      <div className="flex flex-1 gap-10 test-2xl font-bold">
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95 ">
          HOME
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
          ABOUT
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
          SERVICES
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
          PROFILE
        </h3>
        <button>{isDark ? "☀️":}</button>
      </div>
    </nav>
  );
}

export default Navbar;
