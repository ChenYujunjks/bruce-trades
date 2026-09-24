"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {`👋 Hi, I'm`} <span className="text-[--color-brand]">Bruce Chen</span>
      </motion.h1>

      <motion.p
        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Senior CS student at <strong>NYU Shanghai (Class of 2025)</strong>{" "}
        <br />
        and MSCS student at <strong>NYU Courant</strong>.
      </motion.p>

      <TypeAnimation
        sequence={[
          "Full Stack Development",
          2000,
          "DevOps Engineering",
          2000,
          "PostgreSQL Engineering",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-lg font-medium text-[--color-brand]"
      />
    </section>
  );
}
