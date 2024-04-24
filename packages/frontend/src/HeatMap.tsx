import Navbar from "./Navbar.tsx";
import Header from "./Header.tsx";
import map from "./assets/bahrainMap.png";

function HeatMap() {
  return (
    <div className="flex flex-col bg-zinc-100 bg-opacity-90">
    <Header/>
    <Navbar />
      <div className="flex gap-5 max-md:flex-wrap mt-28">
       
        <div className="flex flex-col grow ml-32 shrink-0 self-end mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
            <div className="shrink-0 rounded-full bg-[linear-gradient(180deg,#FFF_0%,#E8EAEA_100%)] h-[23px]" />
          </div>
          <img
            loading="lazy"
            src={map}
            className="mt-12 w-full  max-md:mt-10 max-md:max-w-full aspect-ratio: 1 / 1 rounded-xl shadow-md"
          />
        </div>
    </div>
  );
}
export default HeatMap;
