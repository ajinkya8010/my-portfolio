"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText text-white">
            Hi, I&apos;m <span className="text-[#915EFF] ">Ajinkya</span>
          </h1>
          <p className="heroSubText">Lifelong Learner in Tech</p>
        </div>
      </div>

      {/* Centered GIF */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none mt-36">
        {/* <Image
          src="/setup.gif"
          alt="Hero Animation"
          width={500}
          height={500}
          className="object-contain mix-blend-screen"
          unoptimized={true}
        /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-contain mix-blend-screen w-[500px] h-[500px]"
        >
          <source src="/setup.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="group">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
          >
            {/* Simple down arrow */}
            <div className="w-4 h-4 border-r-2 border-b-2 border-secondary/70 group-hover:border-secondary transform rotate-45 transition-colors duration-300" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
