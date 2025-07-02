"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => {
        setShowVideo(true);
      });
    } else {
      setTimeout(() => {
        setShowVideo(true);
      }, 1000);
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText text-white !leading-tight !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl font-extrabold">
            Hi, I&apos;m <span className="text-[#915EFF]">Ajinkya</span>
          </h1>
          <p className="heroSubText">Lifelong Tech Learner</p>
        </div>
      </div>

      {/* Hero Video or Fallback */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none mt-36 ml-8">
        {!showVideo ? (
          <Image
            src="/fallback.webp"
            alt="Hero Animation Fallback"
            width={650}
            height={650}
            className="object-contain mix-blend-screen"
            loading="eager"
            priority
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/fallback.webp"
            className="object-contain mix-blend-screen w-[650px] h-[650px]"
          >
            <source src="/setup.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-8 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="group">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
          >
            <div className="w-4 h-4 border-r-2 border-b-2 border-secondary/70 group-hover:border-secondary transform rotate-45 transition-colors duration-300" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
