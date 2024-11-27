import React from 'react';
import { HERO_CONTENT } from "../constants";
import anaProfile from "../assets/anaProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap items-center">
      <div className="w-full lg:w-1/2 p-4 lg:pl-10 flex flex-col justify-center items-center lg:items-start
       space-y-6">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-stone-800 rounded-full flex items-center justify-center">
            <h1 className="text-white text-xl sm:text-2xl lg:text-4xl">A</h1>
          </div>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-[rgb(194,119,102)] text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide -ml-3 sm:-ml-4 lg:-ml-5"
          >
            NA
          </motion.h1>
          <motion.h1
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="text-[rgb(194,119,102)] text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide ml-2 sm:ml-2 lg:ml-3"
          >
            BARTOS
          </motion.h1>
        </div>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left"
        >
          FULL STACK DEVELOPER
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-stone-700 text-sm sm:text-base lg:text-lg font-medium tracking-tighter text-center lg:text-left px-4 sm:px-8 lg:px-0"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
      <div className="w-full lg:w-1/2 bg-[rgb(205,198,192)] flex justify-center items-center overflow-hidden h-auto">
        <motion.img
          src={anaProfile}
          alt="photo profile"
          className="w-auto h-auto max-w-[120px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[350px] object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
    </section>
  );
};

export default Hero;
