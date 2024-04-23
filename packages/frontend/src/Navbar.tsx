import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdGridView } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import logo from "./assets/dashcopLogo.png";
function Navbar() {
  return (
    <div className="flex flex-col items-center px-px pt-4 pb-20 h-full w-24 bg-gradient-to-r from-blue-700 to-blue-900  fixed top-0 left-0 ">
      <div>
      <img
        loading="lazy"
        src={logo}
        className="shrink-0  pr-1"
      />
      </div>
      <div className="flex-1 mt-20">
      <Link to="/HeatMap">
      <GoHomeFill className="text-3xl text-white hover:text-slate-300 mx-3" />
      </Link>
      <Link to="/ListView">
      <MdGridView className="text-3xl text-white hover:text-slate-300 ml-3 mt-6" />
        
      </Link>
      <FaChartPie className="text-3xl text-white hover:text-slate-300 ml-3 mt-6"/>
      
      </div>

      <div className="mt-36">
        <FaUserCircle className="text-4xl text-white hover:text-slate-300  " />
      </div>
    
    </div>
  );
}
export default Navbar;
