import Dark from "./Dark";

function Navbar() {

  
  return (
    <nav
      className="flex md:h-16  sm:h-full md:rounded-4xl text-gray-900 to-white md:px-10 md:flex-row md:items-center sm:px-5 md:w-full dark:bg-black dark:text-white sm:flex-col sm:w-4/7 sm:items-start sm:bg-cyan-300 fixed top-0 z-50 ">
      <div className=" md:flex-1 text-2xl sm:m-5 cursor-pointer font-extrabold">LOGO</div>
      <div className="flex md:flex-1 md:gap-10 sm:gap-5 test-2xl font-bold md:flex-row sm:flex-col ">
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
