import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white lg:py-20 sm:py-5 md:py-5 my-8" 
    >
      <div className="flex items-center justify-center mb-6">
      <div className="lg:w-20 lg:h-20 w-16 h-16 bg-stone-700 flex items-center justify-center">
      <h1 className="text-white text-3xl lg:text-4xl">P</h1>
        </div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-[rgb(194,119,102)] text-2xl lg:text-4xl font-bold tracking-wide lg:-ml-6 -ml-4"
          >
          ROJECTS
        </motion.h1>
      </div>
      <div className="flex items-center justify-center">
      <div className="bg-[rgb(205,198,192)] p-6 lg:p-10 shadow-[0px_10px_30px_rgba(0,0,0,0.5)] flex justify-center">
      <div className="bg-[#f4f3ee] w-full max-w-[100%] p-4 lg:p-8 shadow-2xl">
        <div className="space-y-10">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  className="py-4 flex flex-wrap lg:flex-nowrap items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={project.image}
                      width={150}
                      height={150}
                      alt={project.title}
                      className="object-cover rounded-sm items-center"
                    />
                  </motion.div>

                  <motion.div
                    className="w-full lg:w-3/4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                  >
                    <h6 className="mb-2 font-semibold text-lg">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-2 py-1 text-stone-700 underline decoration-text-stone-700 decoration-2 transition-all duration-300 hover:text-[#f5d2b4] hover:decoration-[#f5d2b4]"
                      >
                        {project.title}
                      </a>
                    </h6>
                    <p className="text-stone-500 mb-4 text-sm md:text-base max-w-xl font-light tracking-tighter">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;