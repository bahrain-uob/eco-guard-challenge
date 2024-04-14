import Header from "./Header.tsx";
function ListView() {
  return (
    <div className="flex flex-col bg-zinc-100 bg-opacity-90">
      <Header />

      <div className="flex gap-5 max-md:flex-wrap">
        <div className="flex gap-5 justify-between px-9 max-w-full text-sm bg-gray-50 rounded-2xl border border-solid border-neutral-300 w-[852px] max-md:flex-wrap max-md:px-5 ">
          <div className="flex gap-3.5 justify-between items-center font-bold text-neutral-800 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36b581bdbf959cc520579724e1b514652565c034255e9acc39e2af34352ed062?"
              className="shrink-0 self-stretch aspect-[0.64] w-[45px]"
            />
            <div className="self-stretch my-auto">Filter By</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
              className="shrink-0 self-stretch w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400"
            />
            <div className="self-stretch my-auto">3 Apr 2024</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d4f0a5ebd968b538de1fc30f880391727ef287df12f4fd8857b521b0aaf58f?"
              className="shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
              className="shrink-0 self-stretch w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400"
            />
            <div className="self-stretch my-auto">Violation</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d4f0a5ebd968b538de1fc30f880391727ef287df12f4fd8857b521b0aaf58f?"
              className="shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
              className="shrink-0 self-stretch w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400"
            />
            <div className="self-stretch my-auto"> Status</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d4f0a5ebd968b538de1fc30f880391727ef287df12f4fd8857b521b0aaf58f?"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd7a9b92ceb4fe39d0fa959677be7c13cfd8e9f663b7ffd44934a98009b271a?"
            className="shrink-0 w-px border-0 border-solid aspect-[0.01] border-neutral-400 stroke-[0.3px] stroke-neutral-400"
          />
          <div className="flex gap-2 my-auto font-semibold text-rose-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/faffa4dc7be7eb18811cd09b7f36d4478b6d2b31408866b355e6047a9391b4e5?"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="my-auto">Reset Filter</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListView;
