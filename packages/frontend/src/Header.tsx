import React from "react";
import icon from "./assets/image 4.svg";
function Header() {
  return (
    <div className="flex gap-0 max-md:flex-wrap">
      <img
        loading="lazy"
        src={icon}
        className="shrink-0 aspect-[1.32] w-[91px]"
      />
      <div className="flex flex-auto gap-5 justify-between px-10 py-5 bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 my-auto text-sm font-semibold text-center whitespace-nowrap text-neutral-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb66fdc6c2470c40770ca7dd063bd7a716e85895da4abd614eccf426de98486?"
            className="shrink-0 aspect-[0.87] w-[13px]"
          />
          <div className="my-auto">Search</div>
        </div>
        <div className="flex gap-4 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4b761735cf44770e0e8456680d31702bedf8278d556562a4f891ac82a85a00?"
            className="shrink-0 aspect-[0.84] w-[27px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3465611b5f69c1f38973e43c3da4ea838aa9e26609b38af93feae1622feaf72?"
            className="shrink-0 self-start aspect-[0.83] fill-black w-[25px]"
          />
          <div className="flex flex-col self-start">
            <div className="text-sm font-bold text-neutral-700">Moni Roy</div>
            <div className="mt-2.5 text-xs font-semibold text-neutral-600">
              Admin
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2847f8b9dedd1a183c14f3828efc8e7a0022b5741582ed9d0ba831d5d0e50df?"
            className="shrink-0 my-auto aspect-[0.83] w-[15px]"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
