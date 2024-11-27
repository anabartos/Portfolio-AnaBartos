import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logoAna.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-end justify-between py-2  px-4 *:relative border-b border-stone-100">
      <div className="flex items-end">
        <img className="w-12 lg:w-18" src={logo} alt="logo" />
      </div>

      <div className="hidden lg:flex gap-8 items-end text-lg mr-6 relative">
        <a
          href="#about"
          className="relative group"
        >
          About Me
          <span className="absolute left-0 bottom-[-9px] w-0 group-hover:w-full h-[3px] bg-black transition-all"></span>
        </a>
        <a
          href="#experiences"
          className="relative group"
        >
          Experiences
          <span className="absolute left-0 bottom-[-9px] w-0 group-hover:w-full h-[3px] bg-black transition-all"></span>
        </a>
        <a
          href="#technologies"
          className="relative group"
        >
          Technologies
          <span className="absolute left-0 bottom-[-9px] w-0 group-hover:w-full h-[3px] bg-black transition-all"></span>
        </a>
        <a
          href="#contact"
          className="relative group"
        >
          Contact
          <span className="absolute left-0 bottom-[-9px] w-0 group-hover:w-full h-[3px] bg-black transition-all"></span>
        </a>
      </div>

      <button
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-6 px-8">
          <a href="#about" className="block py-2 hover:text-stone-500">About Me</a>
          <a href="#experiences" className="block py-2 hover:text-stone-500">Experiences</a>
          <a href="#technologies" className="block py-2 hover:text-stone-500">Technologies</a>
          <a href="#contact" className="block py-2 hover:text-stone-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
