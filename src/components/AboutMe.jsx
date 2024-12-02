import { ABOUT_TEXT } from "../constants";
import aboutme from "../assets/aboutme.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: delay },
  },
});

const AboutMe = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div
        className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden 
        h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutme})` }}
      ></div>
      <div className="w-full lg:w-1/2 p-4 lg:pl-10 flex items-center">
        <div className="flex flex-col items-center lg:items-start tracking-wide space-y-3">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-[rgb(194,119,102)] font-bold text-2xl lg:text-3xl mb-3 text-center"
          >
            ABOUT ME
          </motion.h1>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-stone-700 text-sm sm:text-base lg:text-lg font-light tracking-tighter text-center lg:text-left px-4 sm:px-8 lg:px-0"
            >
            {ABOUT_TEXT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
