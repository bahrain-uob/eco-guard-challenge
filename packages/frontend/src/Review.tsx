
import { Link } from "react-router-dom";
import Header from "./Header.tsx";
import Navbar from "./Navbar.tsx";
import street from "./assets/Rectangle 1386.png";
function Review() {
  return (
    <div className="flex flex-col bg-zinc-100 bg-opacity-90 ">
      <Header />

      <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
        <Navbar />
        <div className="flex flex-col grow shrink-0 self-start mt-6 basis-0 w-fit max-md:max-w-full">
          <Link to="\ListView">
        <div className="flex gap-5 self-start px-5 text-3xl font-bold tracking-normal text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d536be691ab2825d4892058bad2ee08b5c2db2e4ca39cf18b5b204665c31c5fc?"
              className="shrink-0 w-11 aspect-[1.1]"
            />
            <div className="flex-auto my-auto">To Review</div>
        </div>
        </Link>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center px-2.5 py-20 min-h-[536px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={street}
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5 justify-between mt-40 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d8cbf8fab1f8d519ae6289d915aa2bb2ba2e0b679322c4d3cc2181596386db?"
                      className="shrink-0 aspect-square w-[41px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/090171951115c00b84b7265133395d223c9693ba69d50d70d53eb99397494061?"
                      className="shrink-0 aspect-square w-[41px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-end px-20 pt-16 pb-5 w-full bg-white rounded-none text-neutral-800 max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 self-start ml-7 max-w-full text-sm w-[226px] max-md:ml-2.5">
                    <div className="flex-auto font-extrabold">
                      LICENSE PLATE
                    </div>
                    <div className="font-semibold">12345</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1388f70a4247844383ebee806bc33beb7e83032757e003c61a557dd8957a3c30?"
                    className="mt-3.5 mr-9 aspect-square w-[15px] max-md:mr-2.5"
                  />
                  <div className="flex gap-5 py-9 mt-2.5 text-sm border-b border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 border-opacity-40 max-md:flex-wrap">
                    <div className="font-extrabold">CAR DESCRIPTION</div>
                    <div className="flex-auto font-semibold">
                      Audi A6 Saloon,Black
                    </div>
                  </div>
                  <div className="flex gap-5 py-7 max-w-full border-b border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 border-opacity-40 w-[448px] max-md:flex-wrap">
                    <div className="self-start text-sm font-extrabold">
                      TIMESTAMP
                    </div>
                    <div className="flex-auto text-sm font-semibold">
                      Wednesday, 03-Apr-24 09:12:17 UTC
                    </div>
                  </div>
                  <div className="flex z-10 gap-5 py-7 max-w-full text-sm border-b border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 border-opacity-40 w-[448px] max-md:flex-wrap">
                    <div className="self-start font-extrabold">LOCATION</div>
                    <div className="flex-auto font-semibold">
                      089 Kutch Green Apt. 448
                    </div>
                  </div>
                  <div className="flex gap-5 py-9 max-w-full text-sm whitespace-nowrap border-b border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 border-opacity-40 w-[448px] max-md:flex-wrap">
                    <div className="self-start font-extrabold">TYPE</div>
                    <div className="flex-auto font-semibold">Tailgating</div>
                  </div>
                  <div className="flex gap-5 justify-between self-center mt-6 text-base text-center text-black whitespace-nowrap tracking-[3px]">
                    <div className="px-5 pt-4 pb-2.5 border border-solid shadow-sm bg-teal-500 bg-opacity-30 border-teal-500 border-opacity-0 rounded-[30px]">
                      Accept
                    </div>
                    <div className="justify-center px-6 py-3.5 border border-solid shadow-sm bg-red-600 bg-opacity-40 border-red-600 border-opacity-0 rounded-[30px] max-md:px-5">
                      Reject
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
