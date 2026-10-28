
import Dark from "./Dark";

function Navbar() {


  return (
    <nav className="flex md:flex-row items-center md:h-10 md:w-full px-10 dark:bg-black dark:text-white  md:bg-orange-600 sm:h-50 sm:flex-col sm:bg-amber-600">
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
        <Dark/>
      </div>
    </nav>
  );
}

export default Navbar;
