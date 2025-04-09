import { PROJECTS } from "../constants";
const Projects = () => {
  return (
    <div className="container mx-auto border-b  border-neutral-900 pb-4 mt-10">
      <h1 className="text-4xl xl:text-6xl font-thin tracking-wide text-center capitalize mt-9">
        Projects
      </h1>
      <div className="px-4 py-6 mt-20 ">
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center  " key={index}>
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-slate-900 px-4 py-2  text-xs font-semibold bg-gradient-to-r from-purple-500 via-purple-400 to bg-slate-100 bg-clip-text text-transparent tracking-normal mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
