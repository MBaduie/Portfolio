import { ABOUT_TEXT } from "../constants";
import personal from "../assets/images/personal.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto border-b border-neutral-900 pb-4 mt-10 flex flex-col items-center"
    >
      <h1 className="capitalize text-4xl font-thin tracking-wide xl:text-6xl lg:pt-20 mb-12 max-xl:mb-6 text-center">
        about
        <span className="text-slate-500"> me</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:items-start">
        <div className="hidden lg:block w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={personal} alt="about me" className="rounded-2xl " />
          </div>
        </div>
        <div className="px-6  w-full lg:w-1/2 lg:p-8 ">
          <p className="font-light  leading-8 my-2 max-w-xl  text-justify">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
