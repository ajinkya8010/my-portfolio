"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../constants";
import { fadeIn } from "@/app/utils/motion";
import { useState, useEffect, useMemo } from "react";

type SocialCardProps = {
  index: number;
  name: string;
  link: string;
  image: string;
  platform: string;
};

const SocialCard = ({
  index,
  name,
  link,
  image,
  platform,
}: SocialCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    className="p-4 rounded-xl w-[140px] h-[120px] flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden border border-secondary/20 hover:border-secondary/60 transition-all duration-300 bg-transparent backdrop-blur-sm flex-shrink-0"
  >
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="w-12 h-12 mb-2 rounded-full overflow-hidden group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src={image}
          width={48}
          height={48}
          alt={`${platform} profile`}
          className="w-full h-full object-cover relative z-10 group-hover:brightness-125 group-hover:saturate-150 transition-all duration-500"
        />
      </div>
      <p className="text-white text-[12px] font-medium text-center group-hover:text-secondary transition-colors duration-300">
        {platform}
      </p>
      <p className="text-secondary text-[10px] text-center opacity-80">
        @{name}
      </p>
    </Link>
  </motion.div>
);

const SocialLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 850);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollWidth = socialLinks.length * 144; // card width + estimated gap

  // Memoize the rendered list to avoid recomputing on every render
  const renderedLinks = useMemo(() => {
    return isMobile
      ? [...socialLinks, ...socialLinks] // duplicate for seamless mobile scroll
      : socialLinks; // single for desktop
  }, [isMobile]);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h3 className="text-white font-bold text-[24px] sm:text-[28px] mb-2">
          Social | Coding Profiles
        </h3>
        <div className="w-16 h-[2px] bg-gradient-to-r from-secondary to-primary mx-auto mb-2"></div>
        <p className="text-secondary text-[14px] opacity-80">
          Find me across the web
        </p>
      </motion.div>

      {/* Scrolling container */}
      <div className="w-full overflow-hidden">
        <motion.div
          className={`flex gap-4 px-4 ${
            isMobile ? "justify-start" : "justify-center"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={
            isMobile ? { x: ["0%", `-${scrollWidth}px`] } : { x: 0 } // reset position on desktop!
          }
          transition={
            isMobile
              ? {
                  x: {
                    duration: socialLinks.length * 4,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: { duration: 0.8, delay: 0.3 },
                }
              : { duration: 0.8, delay: 0.3 }
          }
          style={{
            display: "flex",
            width: isMobile ? scrollWidth * 2 : "auto",
          }}
        >
          {renderedLinks.map((social, index) => (
            <SocialCard key={index} index={index} {...social} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialLinks;
