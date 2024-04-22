"use client";
import React from "react";
import Image from "next/image";
import DP from "@/public/dev_profile.jpg";
import PD2 from "@/public/PD2.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={DP}
              alt="Dev portrait"
              width="0.5"
              height="250"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] object-mid border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Dev.</span> I'm a{" "}
        <span className="font-bold">software development engineer.</span> I build software solutions.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          href="/Dev_Patel.pdf"
          download
          className="group bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/devpatel2427/"
          target="_blank"
          className="bg-white/10 hidden p-4 sm:flex items-center opacity-70 gap-2 rounded-full border border-black/10  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/pateldev02"
          target="_blank"
          className="bg-white/10 p-4 opacity-70 hidden sm:flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 outline-none focus:scale-110 hover:scale-105 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-row sm:hidden mt-4 items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="https://www.linkedin.com/in/devpatel2427/"
          target="_blank"
          className="bg-white/10 p-4 flex items-center opacity-70 gap-2 rounded-full border border-black/10  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/pateldev02"
          target="_blank"
          className="bg-white/10 p-4 opacity-70 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 outline-none focus:scale-110 hover:scale-105 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
