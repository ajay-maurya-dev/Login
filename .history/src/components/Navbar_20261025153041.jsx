import Dark from "./Dark";

function Navbar() {
  return (
    <nav
      className="flex rounded-4xl text-gray-500 to-white px-10 md:flex-row md:items-center md:h-10 md:w-full dark:bg-black dark:text-white sm:flex-col sm:w-4/7 sm:items-start
      sm:h-full fixed top-0 z-50"
    >
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
