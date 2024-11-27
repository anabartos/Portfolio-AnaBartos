import { FaJsSquare, FaHtml5, FaPython, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiCss3, SiTailwindcss, SiFigma } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

const Tecnologies = () => {
  return (
<section id="technologies" className="h-full bg-[#f4f3ee] lg:py-20 sm:py-5 md:py-5 p-8">
      <div className="flex items-center justify-center mb-5">
      <div className="lg:w-20 lg:h-20 w-16 h-16 bg-stone-700 flex items-center justify-center">
      <h1 className="text-white text-3xl lg:text-4xl">T</h1>
        </div>

        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-[rgb(194,119,102)] text-2xl lg:text-4xl font-bold tracking-wide lg:-ml-6 -ml-4"
          >
          ECHNOLOGIES
        </motion.h1>
      </div>

      <div className="container mx-auto px-10">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <motion.div
            variants={iconsVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <FaJsSquare className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
          <motion.div
            variants={iconsVariants(4)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <SiTypescript className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
          <motion.div
            variants={iconsVariants(3)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <RiReactjsLine className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
          <motion.div
            variants={iconsVariants(2)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <FaHtml5 className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
          <motion.div
            variants={iconsVariants(6)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <SiCss3 className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
          <motion.div
            variants={iconsVariants(4)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <FaPython className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
          <motion.div
            variants={iconsVariants(3)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <FaBootstrap className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
          <motion.div
            variants={iconsVariants(2)}
            initial="initial"
            animate="animate"
            className="p-4 bg-white shadow-md rounded-md"
          >
            <SiTailwindcss className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800" />
          </motion.div>
         <motion.div
  variants={iconsVariants(4)}
  initial="initial"
  animate="animate"
  className="p-4 bg-white shadow-md rounded-md"
>
  <SiFigma className="sm:text-4xl md:text-4xl lg:text-5xl text-stone-800"/>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Tecnologies;
