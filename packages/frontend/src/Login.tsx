import * as React from "react";
import icon from "./assets/react.svg";
function Login() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-100 bg-opacity-90 max-md:px-5">
      <div className="mt-10 w-full max-w-[1012px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={icon}
              className="mt-20 w-full aspect-[0.88] max-md:mt-10"
            />
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
              <div className="shrink-0 mt-2.5 rounded-3xl border border-solid shadow-sm border-black border-opacity-50 h-[63px] max-md:max-w-full" />
              <div className="flex gap-5 mx-4 mt-7 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex-auto text-2xl text-center text-stone-500">
                  Password
                </div>
                <div className="flex gap-2 self-start text-lg text-right text-stone-500 text-opacity-80">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae34a7746fed53917382d7dd561a0e513c20890bcaf6d5c95361130c92efbfe0?"
                    className="shrink-0 self-start aspect-[1.12] w-[18px]"
                  />
                  <div>Hide</div>
                </div>
              </div>
              <div className="shrink-0 mt-3 rounded-3xl border border-solid shadow-sm border-black border-opacity-50 h-[63px] max-md:max-w-full" />
              <div className="self-center mt-7 text-lg text-right underline text-neutral-900">
                Forget your password?
              </div>
              <div className="justify-center items-center self-center px-16 py-5 mt-11 max-w-full text-2xl font-medium text-center text-white bg-blue-800 border border-blue-800 border-solid shadow-sm rounded-[30px] w-[236px] max-md:px-5 max-md:mt-10">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
