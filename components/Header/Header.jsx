"use client";
import { images } from "../../constants";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Programmer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <header className="header w-4/5 mx-auto">
      <ParallaxLayer speed={0.5}>
        <div className="two-color-bg"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0}>
        <div className="intro w-1/2 h-full flex justify-end items-center pr-44">
          <div className="container text-right">
            <p className="text-2xl text-ff ">Hi 👋 I&apos;m</p>
            <p className="text-7xl text-ff font-semibold">
              Ragib
              <br />
              Al Asad
            </p>
            <p className="sub-heading text-lg text-ff">I BUILD WEBSITES</p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5}>
        <div className="showcase-img mx-auto flex justify-center items-end">
          <Image
            className="object-contain"
            src={images.ragib_potrait}
            alt="Ragib Al Asad"
            height={640}
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1}>
        <div className="terminal container ml-auto w-1/2 h-full flex justify-start items-end p-6 pl-20">
          <div className="terminal-win">
            <div className="terminal-head flex shadow-sm p-2 gap-1">
              <div className="close"></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <div className="terminal-body px-6 py-0">
              <span className="text-xl">
                <span className="code-color-1">{"<div "}</span>
                <span className="code-color-2">className</span>
                <span className="code-color-4">=</span>
                <span className="code-color-3">&quot;aboutMe&quot;</span>
                <span className="code-color-1">{">"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<p> "}</span>
                <span className="code-color-4">I&apos;m a</span>
                <span className="code-color-1">{" </p>"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<h1> "}</span>
                <span className="code-color-4 text-2xl">{text}</span>
                <span className="code-color-2">
                  <Cursor cursorStyle="█" />
                </span>
                <span className="code-color-1">{"</h1>"}</span>
                <br />
                <span className="code-color-1">{"</div>"}</span>
              </span>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </header>
  );
};

export default Header;
