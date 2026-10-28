import Dark from "./Dark";

function Navbar() {
  return (
    <nav
      className="flex md:h-16 md:rounded-4xl text-gray-900 to-white md:px-10 md:flex-row md:items-center md:w-full dark:bg-black dark:text-white sm:flex-col sm:gap-3 sm:px-5 sm:w-4/7 sm:items-start sm:bg-cyan-300 sm fixed top-0 z-50 ">
      <div className=" flex-1 text-2xl cursor-pointer font-extrabold">LOGO</div>
      <div className="flex flex-1 gap-10 test-2xl font-bold md:flex-row sm:flex-col ">
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95 ">
          <a href="#home">HOME</a>
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
          <a href="#about">ABOUT</a>
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
          <a href="#services">SERVICES</a>
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
          <a href="#contact">CONTACT</a>
        </h3>
        <Dark />
      </div>
    </nav>
  );
}

export default Navbar;
