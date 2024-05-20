import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import  { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import DefaultLayout from '../../layout/DefaultLayout';

const FormLayout = () => {
  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName=" " />
    
    <div className="flex flex-col bg-zinc-100 bg-opacity-90 overflow-x-hidden ">

      <div className="flex gap-5 ml-32 w-full max-md:flex-wrap max-md:max-w-full mt-20">
       
        <div className="flex flex-col grow shrink-0 self-start mt-6 basis-0 w-fit max-md:max-w-full">
    
          <div className="mt-20 max-md:mt-10 max-md:max-w-full ml-12">
            <div className="  flex gap-0 max-md:flex-col max-md:gap-0 pb-40">
              <div className=" drop-shadow-xl flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className=" flex overflow-hidden relative flex-col grow justify-center px-2.5 py-20 min-h-[536px] max-md:max-w-full rounded-lg">
                  <img
                    loading="lazy"
                   
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-3 justify-between mt-40 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    
                   
                  </div>
                </div>
              </div>
              
              
              <div className="flex flex-col  w-4/12 max-md:ml-0 max-md:w-full ">
              <div className=" drop-shadow-xl grow items-end px-3 pt-16 pb-5 w-full bg-white  text-neutral-800 max-md:px-5 max-md:max-w-full rounded-lg ">
                
                <table className="table-auto w-full ">
                   
                       <tr className="border-solid border-b-2 border-grey ">
                          <th className="py-4 " >License Plate </th>
                          <td className="">
                             <input value="343434" disabled = {disabled}  ></input>
                            </td>
                          
                       </tr>
                       <tr className="border-solid border-b-2 border-grey my-4">
                         <th className="py-4">Car Description</th>
                         <td>
                          <input value="Audi A6 Saloon,Black" disabled = {disabled}></input>
                          </td>
                         
                       </tr>
                       <tr className="border-solid border-b-2 border-grey">
                         <th className="py-4">Timestamp</th>
                         <td>
                           <input value="Wednesday, 03-Apr-24 09:12:17 UTC"  disabled = {disabled}></input>
                          </td>
                         
                       </tr>
                       <tr className="border-solid border-b-2 border-grey">
                         <th className="py-4">Location</th>
                         <td>
                           <input value="089 Kutch Green Apt. 448" disabled = {disabled}></input>
                          </td>
                         
                       </tr>
                       <tr className="border-solid border-b-2 border-grey">
                         <th className="py-4">Type</th>
                         <td>
                         <input value="Tailgating" disabled = {disabled}></input>
                         </td>
                         
                       </tr>
                </table>
                <table className="table-auto w-full ml-18 ">
                  <tr className="">
                    <td>
                    <button onClick={toggleDisabled} className=""  >
                    <FaRegEdit className="text-3xl" />
                          
                          
                          </button> 
                    </td>
                  </tr>
                </table>
                  <div className="flex gap-5 justify-between mt-6 ">
                    <button className="flex-1  ">
                    <IoMdCheckmarkCircle  className="text-6xl text-green-600 hover:text-green-700 ml-40" />
                    </button >
                    
                    <button className="flex-1 ">
                    <IoMdCloseCircle  className="text-6xl text-red-600  hover:text-red-700 text-center" />
                    </button>
                  </div>


               </div> 
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
     
    </DefaultLayout>
  );
};

export default FormLayout;
