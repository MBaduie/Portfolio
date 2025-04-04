import { HERO_CONTENT } from "../constants";
import personlRemoval from "../assets/images/personalRemoval.png";
const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex items-center lg:items-start  max-lg:flex-col-reverse justify-start max-xl:justify-between lg:gap-4">
        <div className="flex flex-1 flex-col items-center lg:items-start px-8 max-xl:w-lg w-full ">
          <h1 className="mb-12 max-xl:mb-6 text-4xl font-thin tracking-wide xl:text-6xl lg:pt-20 ">
            Muhammed Badauie
          </h1>
          <span className="bg-gradient-to-r from-amber-400 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-normal mb-8 xl:text-6xl font-bold">
            JavaScript Developer
          </span>
          <p className="my-2 max-w-xl font-light text-justify">
            {HERO_CONTENT}
          </p>
        </div>
        {/* ------------------------------------------------------------ */}

        <div className="flex flex-1 max-w-md max-h-md max-lg:w-64 max-lg:h-64 max-xl:max-w-sm max-xl:max-sm items-center justify-center max-lg:mb-10 mb-12 ">
          <img
            src={personlRemoval}
            alt="Muhammed Badauie"
            className="max-lg:rounded-full rounded-3xl w-full object-contain h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
