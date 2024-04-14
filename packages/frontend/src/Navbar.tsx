import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex flex-col items-center px-px pt-4 pb-20 bg-blue-800">
      <Link to="/HeatMap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/48eee5892a0f172f8fa4af914ba069c7e48dc31c43264dc13c84524ffb76900f?"
          className="aspect-square w-[25px]"
        />
      </Link>
      <Link to="/Review">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e93f9a8aa663c4e7aab876a01c720d495535fae970fa52dc7e6ed09df017e60e?"
          className="mt-6 w-6 aspect-square"
        />
      </Link>
      <Link to="/ListView">
        <div className="flex justify-center items-center self-stretch px-7 py-4 mt-2.5 bg-zinc-300 bg-opacity-10 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b177353acc7abcd7f67518298d11a8148f4f28432896d046bda6adb3588a1c?"
            className="aspect-[1.04] w-[26px]"
          />
        </div>
      </Link>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90fd163fe347fb74f88ec4323bfabc8cffac3f010ccad19171d7bae4951c3310?"
        className="mt-3 w-6 aspect-[1.09] fill-white"
      />
    </div>
  );
}
export default Navbar;
