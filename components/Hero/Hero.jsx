"use client";

import { React, useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";

import CodeWindow from "./CodeWindow";

const Hero = () => {
  let ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let yPinkTransform = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  let yIndigoTransform = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  let yGreenTransform = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  let yYellowTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-250%"]);

  let yPink = yPinkTransform;
  let yIndigo = yIndigoTransform;
  let yGreen = yGreenTransform;
  let yYellow = yYellowTransform;

  return (
    <section className="hero container relative mx-auto sm:w-4/5">
      <motion.div
        style={{ y: yPink }}
        className="pink-bubble absolute left-10 top-6 -z-10 block h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-pink-500 opacity-70 shadow-2xl shadow-pink-500 blur max-md:left-6"
      ></motion.div>
      <motion.div
        style={{ y: yIndigo }}
        className="indigo-bubble absolute bottom-10 right-0 -z-10 block h-52 w-52 rounded-full bg-gradient-to-br from-transparent to-indigo-500 opacity-70 shadow-2xl shadow-indigo-500 blur"
      ></motion.div>
      <motion.div
        style={{ y: yGreen }}
        className="green-bubble absolute right-1/3 top-28 -z-10 block h-40 w-40 rounded-full bg-gradient-to-br from-transparent to-green-500 opacity-70 shadow-2xl shadow-green-500 blur max-md:right-6 max-md:top-52 2xl:top-1/4"
      ></motion.div>
      <motion.div
        style={{ y: yYellow }}
        className="yellow-bubble absolute -bottom-12 left-1/4 -z-10 block h-32 w-32 rounded-full bg-gradient-to-br from-transparent to-yellow-500 opacity-70 shadow-2xl shadow-yellow-500 blur"
      ></motion.div>

      <div className="relative grid w-full grid-cols-1 pt-32 lg:grid-cols-7 xl:pt-40 2xl:grid-cols-2 2xl:pt-64">
        <div className="justify-between pt-16 max-sm:px-6 lg:col-span-3 2xl:col-span-1">
          <div className="pb-20 sm:py-20">
            <p className="-ml-px font-semibold text-slate-300">
              Hi there, I&apos;m
            </p>
            <h1 className="-ml-1 py-2 pb-4 text-5xl font-semibold text-cyan-400">
              Ragib Al Asad
            </h1>
            <p className="border-l-4 border-cyan-400 pl-4 text-xl font-medium text-slate-300">
              Software Developer from Bangladesh
            </p>
            <div className="flex gap-3 pt-16">
              <a
                href=""
                className="group relative inline-block rounded-lg bg-slate-800 p-4 text-xs text-white ring-1 ring-white/10 transition hover:bg-slate-800/70"
              >
                <span className="relative">Download Resume</span>
              </a>
              <div className="my-auto flex gap-3 text-xl text-slate-300">
                <a
                  href="https://facebook.com/ragibalasad"
                  target="_blank"
                  className="transition hover:text-cyan-400/80"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/ragibalasad"
                  target="_blank"
                  className="transition hover:text-cyan-400/80"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ragibalasad"
                  target="_blank"
                  className="transition hover:text-cyan-400/80"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 w-full 2xl:col-span-1">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
