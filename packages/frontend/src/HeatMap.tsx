import Navbar from "./Navbar.tsx";
import Header from "./Header.tsx";
import map from "./assets/image 3.png";
function HeatMap() {
  return (
    <div className="flex flex-col bg-zinc-100 bg-opacity-90">
      <Header />

      <div className="flex gap-5 max-md:flex-wrap">
        <Navbar />
        <div className="flex flex-col grow shrink-0 self-end mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
            <div className="shrink-0 rounded-full bg-[linear-gradient(180deg,#FFF_0%,#E8EAEA_100%)] h-[23px]" />
          </div>
          <img
            loading="lazy"
            src={map}
            className="mt-12 w-full border border-solid aspect-[1.82] border-black border-opacity-0 max-md:mt-10 max-md:max-w-full"
          />
        </div>
    </div>
  );
}
export default HeatMap;
