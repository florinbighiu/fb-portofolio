/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
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
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a primarily patient individual who excels in high-pressure environments and
        consistently embraces the optimistic perspective. My ability to remain composed and positive
        in challenging situations enables me to approach tasks and projects with a level-headed
        attitude and a focus on finding solutions. I thrive in situations that demand resilience,
        adaptability, and a constructive outlook, which allows me to contribute effectively to a
        team's success and deliver results even in the face of adversity.
      </p>
    </motion.section>
  );
}
