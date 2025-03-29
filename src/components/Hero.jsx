import { HERO_CONTENT } from "../constants";
import personlRemoval from "../assets/images/personalRemoval.png";
const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35 px-6">
      <div className="flex flex-wrap justify-center items-start ">
        <div className="w-full lg:w-1/2 flex-1">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="mb-12 text-6xl font-thin tracking-wide lg:mt-16 lg:text-6xl ">
              Muhammed Badauie
            </h1>
            <span className="bg-gradient-to-r from-amber-400 via-slate-500 to-purple-500 bg-clip-text text-transparent text-5xl tracking-normal mb-4">
              JavaScript Developer
            </span>
            <p className="my-2 max-w-xl font-light text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="flex flex-1  ">
          <img
            src={personlRemoval}
            alt="Muhammed Badauie"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
