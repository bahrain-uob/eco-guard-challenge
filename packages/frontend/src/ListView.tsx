import { Link } from "react-router-dom";
import Header from "./Header.tsx";
import Navbar from "./Navbar.tsx";
import Print from "./print.tsx";


function ListView() {
  return (
    
    <div className="flex flex-col h-screen bg-zinc-100 bg-opacity-90 ">
      <Header />
       <Navbar />
       <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full mt-28  ">
       
        <div className="mx-auto px-9 max-w-[900] max-h-[100px] text-sm bg-gray-50 rounded-2xl border border-solid border-neutral-300">
          <div className="flex gap-3.5 justify-between items-center font-bold text-neutral-800 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36b581bdbf959cc520579724e1b514652565c034255e9acc39e2af34352ed062?"
              className="shrink-0 self-stretch aspect-[0.64] max-h-full"
            />
            <div className="self-stretch my-auto">Filter By</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
              className="shrink-0 self-stretch w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400 max-h-full"
            />
            <div className="self-stretch my-auto">3 Apr 2024</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d4f0a5ebd968b538de1fc30f880391727ef287df12f4fd8857b521b0aaf58f?"
              className="shrink-0 self-stretch my-auto w-6 aspect-square max-h-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
              className="shrink-0 self-stretch w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400 max-h-full"
            />
            <div className="self-stretch my-auto">Violation</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d4f0a5ebd968b538de1fc30f880391727ef287df12f4fd8857b521b0aaf58f?"
              className="shrink-0 self-stretch my-auto w-6 aspect-square max-h-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
              className="shrink-0 self-stretch w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400 max-h-full"
            />
            <div className="self-stretch my-auto"> Status</div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d4f0a5ebd968b538de1fc30f880391727ef287df12f4fd8857b521b0aaf58f?"
            className="shrink-0 my-auto w-6 aspect-square max-h-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
            className="shrink-0 w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400 max-h-full"
          />
          <div className="flex gap-2 my-auto font-semibold text-rose-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/faffa4dc7be7eb18811cd09b7f36d4478b6d2b31408866b355e6047a9391b4e5?"
              className="shrink-0 self-stretch aspect-[0.64] max-h-full"
            />
            <div className="my-auto">Reset Filter</div>
          </div>
          
          </div>


          <div className="flex flex-col  w-12/12 max-md:ml-0 max-md:w-full mt-14 ">
              <div className=" drop-shadow-xl grow items-end px-3 pt-16 pb-5 w-full bg-white  text-neutral-800 max-md:px-5 max-md:max-w-full rounded-lg ">
                
                <table className="table-auto w-full ">

                <tr className="border-solid border-b-2 border-grey ">
                          <th className="py-4 " >License Plate </th>
                          <th className="">Timestamp</th>
                          <th>Status</th>
                          <th></th>
                          <th></th>
                </tr>
                <tr className="border-solid border-b-2 border-grey my-4">
                         <td className="pl-5 py-5">343434</td>
                         <td>Wednesday, 03-Apr-24 09:12:17 UTC</td>
                         <td>
                          <button className="bg-green-500 rounded-full bg-opacity-20 ">
                          <div className="flex flex-1 gap-5 justify-between text-green-600 whitespace-nowrap">
                           <div className="justify-center items-start py-1.5 pr-3 pl-2 0 max-md:px-5">
                              Completed
                            </div>
                          </div>
                          </button>
                         </td>
                         <td>
                         <Print/>
                         </td>
                       </tr>

                       <tr className="border-solid border-b-2 border-grey my-4">
                         <td className="pl-5 py-5">343434</td>
                         <td>Wednesday, 03-Apr-24 09:12:17 UTC</td>
                         <td>
                         <Link to="/Review">
                          <button className="bg-red-500 hover:bg-red-600  rounded-full bg-opacity-20 ">
                          <div className="flex flex-1 gap-5 justify-between text-red-600 hover:text-red-300  whitespace-nowrap">
                           <div className="justify-center items-start py-1.5 pr-3 pl-2 0 max-md:px-5">
                              Review
                            </div>
                          </div>
                          </button>
                        </Link>
                         </td>
                         <td>
                         
                         </td>
                       </tr>

                       <tr className="border-solid border-b-2 border-grey my-4">
                         <td className="pl-5 py-5">343434</td>
                         <td>Wednesday, 03-Apr-24 09:12:17 UTC</td>
                         <td>
                          <button className="bg-green-500 rounded-full bg-opacity-20 ">
                          <div className="flex flex-1 gap-5 justify-between text-green-600 whitespace-nowrap">
                           <div className="justify-center items-start py-1.5 pr-3 pl-2 0 max-md:px-5">
                              Completed
                            </div>
                          </div>
                          </button>
                         </td>
                         <td>
                         <Print/>
                         </td>
                       </tr>

                       <tr className="border-solid border-b-2 border-grey my-4">
                         <td className="pl-5 py-5">343434</td>
                         <td>Wednesday, 03-Apr-24 09:12:17 UTC</td>
                         <td>
                         <Link to="/Review">
                          <button className="bg-red-500 hover:bg-red-600  rounded-full bg-opacity-20 ">
                          <div className="flex flex-1 gap-5 justify-between text-red-600 hover:text-red-300  whitespace-nowrap">
                           <div className="justify-center items-start py-1.5 pr-3 pl-2 0 max-md:px-5">
                              Review
                            </div>
                          </div>
                          </button>
                        </Link>
                         </td>
                         <td>
                         
                         </td>
                       </tr>

                       <tr className="border-solid border-b-2 border-grey my-4">
                         <td className="pl-5 py-5">343434</td>
                         <td>Wednesday, 03-Apr-24 09:12:17 UTC</td>
                         <td>
                          <button className="bg-green-500 rounded-full bg-opacity-20 ">
                          <div className="flex flex-1 gap-5 justify-between text-green-600 whitespace-nowrap">
                           <div className="justify-center items-start py-1.5 pr-3 pl-2 0 max-md:px-5">
                              Completed
                            </div>
                          </div>
                          </button>
                         </td>
                         <td>
                         <Print/>
                         </td>
                       </tr>

                       <tr className="border-solid border-b-2 border-grey my-4">
                         <td className="pl-5 py-5">343434</td>
                         <td>Wednesday, 03-Apr-24 09:12:17 UTC</td>
                         <td>
                         <Link to="/Review">
                          <button className="bg-red-500 hover:bg-red-600  rounded-full bg-opacity-20 ">
                          <div className="flex flex-1 gap-5 justify-between text-red-600 hover:text-red-300  whitespace-nowrap">
                           <div className="justify-center items-start py-1.5 pr-3 pl-2 0 max-md:px-5">
                              Review
                            </div>
                          </div>
                          </button>
                        </Link>
                         </td>
                         <td>
                         
                         </td>
                       </tr>

                       
                </table>

                </div>
          </div>                 
 {/*  

 

  <div className="flex flex-col justify-center p-12 bg-white rounded-3xl border border-solid border-neutral-900 border-opacity-10 max-md:px-5">
  <div className="flex flex-col pt-px pb-8 bg-white width:50%">
    <div className="flex gap-8 justify-between items-start max-w-70% text-sm font-medium text-slate-800 w-[705px] max-md:flex-wrap">
      <div className="flex gap-5 justify-between">
        <div>License plate</div>
        
        <div>Timestamp</div>
       
        <div>Status</div>
      </div>
    </div>

    <div className="flex flex-col justify-center px-2 py-3 mt-6 text-sm border-b border-solid border-slate-800 border-opacity-10 max-md:max-w-full">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-center items-center text-slate-800 max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto">1110</div>
          <div className="text-xs font-semibold text-neutral-800 break-all">
            Wednesday, 03-Apr-24 09:12:17 UTC
          </div>
          <div className="self-stretch my-auto">Tailgating</div>
        </div>
        <Link to="/Review">
          <div className="flex flex-1 gap-5 justify-between my-auto text-rose-600 whitespace-nowrap">
            <div className="justify-center items-start py-1.5 pr-3 pl-2 rounded-full bg-rose-600 bg-opacity-20 max-md:px-5">
              Review
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="flex flex-col justify-center px-2 py-4 border-b border-solid border-slate-800 border-opacity-10 max-md:max-w-full">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto text-sm text-slate-800 max-md:flex-wrap max-md:max-w-full">
          <div>3312</div>

          <div className="text-xs font-semibold text-neutral-800 break-all">
            Wednesday, 03-Apr-24 09:12:17 UTC
          </div>
          <div>Speed</div>
        </div>
        <div className="flex flex-1 gap-5 justify-between text-green-600 whitespace-nowrap">
          <div className="justify-center items-start py-1.5 pr-3 pl-2 rounded-full bg-green-500 bg-opacity-20 max-md:px-5">
            Completed
          </div>
          <div className="justify-center px-6 py-3.5 text-base font-medium leading-6 text-white rounded-lg shadow-sm bg-stone-300 bg-opacity-70">
            <Print/>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center px-2 py-3 text-sm border-b border-solid border-slate-800 border-opacity-10 max-md:max-w-full">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center text-slate-800 max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto">4556</div>

          <div className="text-xs font-semibold text-neutral-800 break-all">
            Wednesday, 03-Apr-24 09:12:17 UTC
          </div>
          <div className="self-stretch my-auto">Phone usage</div>
        </div>
        <div className="flex flex-1 gap-5 justify-between my-auto text-green-600 whitespace-nowrap">
          <div className="justify-center py-1.5 pr-3 pl-2 rounded-full bg-green-500 bg-opacity-20 max-md:pr-5">
            Completed
          </div>
          <div className="justify-center px-6 py-3.5 text-base font-medium leading-6 text-white rounded-lg shadow-sm bg-stone-300 bg-opacity-70">
            <Print/>
          </div>
        </div>
      </div>
    </div>
  
    <div className="flex flex-col justify-center px-2 py-4 mb-48 text-sm border-b border-solid border-slate-800 border-opacity-10 max-md:mb-1 max-md:max-w-full">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto text-slate-80 max-md:flex-wrap max-md:max-w-full">
          <div>2245</div>

          <div className="text-xs font-semibold text-neutral-800 flex-wrap">
            Wednesday, 03-Apr-24 09:12:17 UTC
          </div>
          <div>Speed</div>
        </div>
        <div className="flex flex-1 gap-5 justify-between text-green-600 whitespace-nowrap">
          <div className="justify-center py-1.5 pr-3 pl-2 rounded-full bg-green-500 bg-opacity-20 max-md:pr-5">
            Completed
          </div>
          <div className="justify-center px-6 py-3.5 text-base font-medium leading-6 text-white rounded-lg shadow-sm bg-stone-300 bg-opacity-70">
            <Print/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

*/}
</div>
</div>
</div>
  );
}
export default ListView;
