"use client";

import { useState, useEffect } from "react";
import { images } from "../../constants";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 400);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "header", offset: -100, label: "home" },
    { to: "work", offset: -100, label: "projects" },
    { to: "skills", offset: -100, label: "skills" },
    { to: "services", offset: -100, label: "services" },
    { to: "about", offset: -100, label: "about me" },
    { to: "contact", offset: -100, label: "contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full border-b border-slate-50/10 backdrop-blur-md transition-all max-sm:px-4 ${isScrolled ? "bg-slate-800/70 py-4 shadow" : "py-6"} ${isOpen ? "open" : ""} `}
      id="navbar"
    >
      <motion.div
        className="container mx-auto flex items-center justify-between text-center md:w-4/5"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navHolder flex">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold lowercase text-cyan-400">
              ragibalasad
            </h1>
          </div>

          <ul
            className={`inset-0 ml-auto block list-none backdrop-blur-md max-lg:absolute max-lg:top-24 max-lg:mx-auto max-lg:h-72 max-lg:w-4/5 max-lg:items-center max-lg:rounded-xl max-lg:bg-slate-800/70 max-lg:p-8 max-lg:text-left max-lg:ring-1 max-lg:ring-white/10 lg:flex lg:backdrop-blur-none ${isOpen ? "open" : "hidden"}`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer px-3 text-sm font-semibold uppercase transition max-lg:py-2 dark:hover:text-cyan-400"
              >
                <Link
                  to={link.to}
                  activeClass="dark:text-cyan-400"
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  onSetActive={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex text-xl">
          <MdDarkMode className="ml-5 cursor-pointer" />
          <div className="menuBtn">
            <RiMenu4Fill className="ml-5 cursor-pointer lg:hidden" />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar2;
