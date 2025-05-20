"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4 leading-8">
      I’m Dev Patel — a software engineer with a unique blend of experience across data engineering and retail operations. Over the years, I’ve had the opportunity to work on high-scale, distributed systems and contribute to impactful projects that earned early recognition and trust. Currently pursuing my Master’s in Computer Science at Johns Hopkins University with a focus on Data Science and Cloud Computing, I’m continuing to sharpen my skills at the intersection of scalable infrastructure and intelligent systems.</p>

      <p>Outside of work, I’m an easygoing, curious individual who values balance and lifelong learning. I spend my time exploring the outdoors, playing cricket, and diving deeper into the world of quantitative finance — an area that fascinates me for its blend of analytics, strategy, and market behavior. I enjoy taking on new challenges, staying adaptable, and bringing thoughtful energy into everything I do.</p>

    </motion.section>
  );
}
