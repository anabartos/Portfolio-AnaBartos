import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experiences"
      className="bg-[#f5d2b4] lg:py-20 sm:py-5 md:py-5 p-8"
    >
      <div className="flex items-center justify-center mb-4">
      <div className="lg:w-20 lg:h-20 w-16 h-16 bg-stone-700 flex items-center justify-center">
      <h1 className="text-white text-3xl lg:text-4xl">E</h1>
      </div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-[rgb(194,119,102)] text-2xl lg:text-4xl font-bold tracking-wide lg:-ml-6 -ml-4"
        >
          XPERIENCE
        </motion.h1>
      </div>
        <div className="bg-white grid p-6 lg:m-10 md:m-5 sm:m-5 shadow-2xl">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4"
            >
              <div className="lg:col-span-3 p-0 lg:p-6 lg:m-3 text-black flex lg:items-center justify-center h-full">
                <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="text-sm md:text-base font-light tracking-tight text-center"
                >
                  {experience.year}
                </motion.p>
              </div>

              <div className="lg:col-span-9 lg:p-4">
                <h6 className="mb-2 font-semibold uppercase">
                  {experience.role} -{" "}
                  <span className="text-sm text-stone-900">{experience.company}</span>
                </h6>
                <p className="text-stone-500 mb-4 text-sm md:text-base font-light tracking-tighter">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-black text-white px-2 py-1 text-sm font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Experience;
