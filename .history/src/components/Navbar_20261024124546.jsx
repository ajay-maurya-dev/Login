
import Dark from "./Dark";

function Navbar() {


  return (
    <nav className="flex md:flex-row md:items-center md:h-10 md:w-full px-10 dark:bg-black dark:text-white md:bg-sky-500 sm:h-full sm:flex-col sm:w-4/7 sm:items-start sm:bg-amber-600 fixed top-0 left-0 z-50 w-full">
      <div className=" flex-1 text-2xl  font-extrabold">LOGO</div>
      <div className="flex flex-1 gap-10 test-2xl font-bold md:flex-row sm:flex-col ">
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
        <Dark/>
      </div>
    </nav>
  );
}

export default Navbar;
