import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-stone-900 pb-10 pt-8" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-[#fbb87d] font-bold text-2xl lg:text-3xl tracking-wide mb-5 text-center"
      >
        Get in Touch
      </motion.h1>
      <div className="flex justify-center gap-8 my-4">
        <motion.a
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          href="https://www.linkedin.com/in/ana-bartos-perez/"
          target="_blank"
          className="text-4xl text-stone-50 hover:text-stone-500"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          href="https://github.com/anabartos"
          target="_blank"
          className="text-4xl text-stone-50 hover:text-stone-500"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          href="https://twitter.com"
          target="_blank"
          className="text-4xl text-stone-50 hover:text-stone-500"
        >
          <FaTwitter />
        </motion.a>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4 text-stone-50">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-stone-50 hover:text-stone-500"
        >
          {CONTACT.email}
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
