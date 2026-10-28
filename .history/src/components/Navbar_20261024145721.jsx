
import { Link } from "react-router-dom";
import Dark from "./Dark";

function Navbar() {


  return (
    <nav className="flex rounded-4xl md:flex-row md:items-center md:h-10 md:w-full  dark:bg-black dark:text-white sm:h-full sm:flex-col sm:w-4/7 sm:items-start">
      <div className=" flex-1 text-2xl cursor-pointer font-extrabold">LOGO</div>
      <div className="flex flex-1 gap-10 test-2xl font-bold md:flex-row sm:flex-col ">
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95 ">
          <Link to="/">HOME</Link>
        </h3>
        <h3 className="cursor-pointer hover:text-cyan-500 active:scale-95">
</Link>
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
