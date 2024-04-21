import icon from "./assets/image 4.svg";
import { useNavigate } from "react-router-dom";

///import { Route, Routes } from "react-router-dom";
//import HeatMap from "./HeatMap.tsx";



function Login() {

  const navigate = useNavigate(); 

  const routeChange = () => { 
    const path = `/HeatMap`; 
    navigate(path);
  }



  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-100 bg-opacity-90 max-md:px-5">
      <div className="mt-10 w-full max-w-[1012px] max-md:max-w-full drop-shadow-2xl">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[45%] pt-52 pr-10 max-md:ml-0 max-md:w-full">
  <img
    loading="lazy"
    src={icon}
    className="justify-self-center object-cover w-250 h-200"
  />
  <div className="self-center text-5xl text-center text-black">
    DashCop
  </div>
</div>

          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-14 pt-20 pb-12 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center mt-7 text-5xl text-center text-black max-md:text-4xl">
                Log in
              </div>
              <div className="self-center mt-3 text-2xl text-center text-stone-500">
                To access your account
              </div>
              
              
              <div className="self-start mt-8 ml-3.5 text-2xl text-center text-stone-500 max-md:ml-2.5">
                Email address
              </div>
              <div className="shrink-0 mt-3  h-[63px] max-md:max-w-full" >
                <input type='email' className=" w-full h-full max-md:w-full rounded-3xl border border-solid shadow-sm border-black border-opacity-50 font-sans" ></input>
              </div>

              <div className="flex gap-5 mx-4 mt-7 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex text-2xl text-center text-stone-500">
                  Password
                </div>
                <div className="flex flex-wrap gap-2 self-start text-lg text-right text-stone-500 text-opacity-80">
                <div className="flex flex-nowrap" > 
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae34a7746fed53917382d7dd561a0e513c20890bcaf6d5c95361130c92efbfe0?"
                    className="shrink-0 self-start aspect-[1.12] w-[18px] mt-2 ml-72"
                  />
                  <div className="flex-1 pb-2 pl-2">Hide</div>
                </div>
                </div>
              </div>
              
              <div className="shrink-0 mt-3  h-[63px] max-md:max-w-full" >
                <input type='password' className=" w-full h-full max-md:w-full rounded-3xl border border-solid shadow-sm border-black border-opacity-50" ></input>
              </div> 
              
              
              
              <div className="self-center mt-7 text-lg text-right underline text-neutral-900 hover:text-blue-900">
                Forget your password?
              </div>
              
              <button className="justify-center items-center self-center " onClick={routeChange} >
              <div className="justify-center items-center self-center px-16 py-5 mt-11 max-w-full text-2xl font-medium text-center text-white bg-blue-800 hover:bg-blue-900 border border-blue-800 border-solid shadow-sm rounded-[30px] w-[236px] max-md:px-5 max-md:mt-10">
                 Log in
              </div>
              </button>
              
             

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

