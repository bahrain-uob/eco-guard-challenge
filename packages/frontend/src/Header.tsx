//import icon from "./assets/image 4.svg";
//import SearchBar from "./SearchBar.tsx";
import { FaBell } from "react-icons/fa";
import Dropdown from "./Dropdown.jsx";
import { BsArrowBarUp } from "react-icons/bs"
function Header() {



  return (
    <div className="flex gap-0 max-md:flex-wrap fixed top-0 right-0 left-0 top-0 ">
      <div className="flex flex-auto gap-5 justify-between px-10 py-5 bg-zinc-100 bg-opacity-90 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 ml-20 my-auto text-sm font-semibold text-center whitespace-nowrap text-neutral-800">
          <div className="my-auto font-bold text-xl">Dashboard</div>
        </div>
        <div className="flex gap-4 justify-between">
          


            {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
               <FaBell className="text-3xl " />
              
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700  sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 ">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 ">
                  Mark all read
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-black">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-black">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    A new update for your downloaded item is available!
                  </p>
                  </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />









          
          <div className="flex flex-col self-start">
            
          </div>
          
        </div>
      </div>
 
    </div>
  );
}
export default Header;
