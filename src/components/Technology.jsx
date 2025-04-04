//icons from React Icons
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const Technology = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 border-b border-neutral-900 mt-20 container mx-auto mb-10">
      <div className="flex items-center justify-center">
        <h1 className="capitalize text-4xl font-thin tracking-wide xl:text-6xl lg:pt-20 mb-12 max-xl:mb-6 text-center">
          Technologies
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-9 py-8">
        <FaReact className="text-8xl text-cyan-500" />
        <RiTailwindCssFill className="text-8xl text-sky-500" />
        <BiLogoTypescript className="text-8xl text-blue-600 " />
        <RiNextjsFill className="text-8xl text-white" />
        <FaNodeJs className="text-8xl text-green-500" />
        <SiMongodb className="text-8xl text-green-700" />
      </div>
    </section>
  );
};

export default Technology;
