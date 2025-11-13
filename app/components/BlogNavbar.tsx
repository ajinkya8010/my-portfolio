"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ResumeButton from "./ResumeButton";

export default function BlogNavbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo/Name - Same as main navbar */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Link href="/">
            <Image
              src="/logo.webp"
              width={70}
              height={70}
              alt="logo"
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          <p className="text-white text-[18px] font-bold flex transition-all duration-300 group-hover:animate-wiggle">
            Ajinkya &nbsp; <span className="sm:block hidden "></span>
          </p>
        </div>

        {/* Center: Back to Portfolio */}
        <div className="hidden sm:block">
          <Link href="/">
            <span className="text-secondary hover:text-white text-[18px] font-medium transition-colors">
              Back to Portfolio
            </span>
          </Link>
        </div>

        {/* Right: Empty space to maintain layout */}
        <div className="w-12 sm:w-16" />

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary"
                onClick={() => setToggle(!toggle)}
              >
                <Link href="/">Back to Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
