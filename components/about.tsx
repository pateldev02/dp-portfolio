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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4 leading-8">
      Armed with a Bachelor's in Computer Applications, my journey began at Paul Mason Consulting, an UK based Retail IT firm, where I turned heads as an intern. Not just any intern, though—I was the one who bagged a pre-placement offer! Why, you ask? For mastering the art of juggling over 150 web portals, ensuring they didn’t just perform but dazzled with real-time data streaming. AWS became my playground, where I played a key role in server migrations, transforming our maintenance and monitoring into a thing of beauty. </p>

      <p>Now, at Frodoe LLC, an USA based IT services firm, I’m the software engineer everyone turns to for elevating systems. Off the clock, I'm a cricket-hitting, hill-conquering enthusiast, occasionally flaunting my JPMorgan Chase and Udemy certs. But really, it's all about making software do the heavy lifting, while I plan my next hike or cricket match.
      </p>
    </motion.section>
  );
}
