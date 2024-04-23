//import icon from "./assets/image 4.svg";
//import SearchBar from "./SearchBar.tsx";
import { FaBell } from "react-icons/fa";
function Header() {
  return (
    <div className="flex gap-0 max-md:flex-wrap fixed top-0 right-0 left-0 top-0">
      <div className="flex flex-auto gap-5 justify-between px-10 py-5 bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 ml-20 my-auto text-sm font-semibold text-center whitespace-nowrap text-neutral-800">
          <div className="my-auto font-bold text-xl">Dashboard</div>
        </div>
        <div className="flex gap-4 justify-between">
           <FaBell className="text-3xl" />
          
          <div className="flex flex-col self-start">
            
          </div>
          
        </div>
      </div>
 
    </div>
  );
}
export default Header;
