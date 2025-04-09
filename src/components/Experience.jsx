import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto mt-10 border-b border-neutral-900 pb-4 "
    >
      <h2 className="text-4xl xl:text-6xl font-thin tracking-wide text-center capitalize">
        Experience
      </h2>
      <div className="mt-8 lg:mt-20 px-4 py-6 lg:px-6 lg:py-8 flex flex-col gap-4 lg:gap-8 justify-center items-center ">
        {EXPERIENCES.map((experience, index) => (
          <div
            className="flex items-center lg:items-start flex-col lg:flex-row gap-4 max-lg:border-b max-lg:border-neutral-900"
            key={index}
          >
            <div className="lg:w-1/2 font-thin text-neutral-200 text-sm lg:text-xl">
              {experience.year}
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6 items-center lg:items-start justify-start text-justify mb-6">
              <h3 className="text-base lg:text-2xl font-semibold">
                {experience.role} - {experience.company}
              </h3>
              <p className="text-xs lg:text-sm text-gray-400">
                {experience.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-slate-700 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 via-purple-400 to bg-slate-100 bg-clip-text text-transparent tracking-normal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
