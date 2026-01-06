import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profilepic from "../assets/image.JPG";

const Hero = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 300], [0, -60]);
  const textY = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-pink-200 to-pink-300"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-200 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-300 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div style={{ y: textY }}>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm tracking-wide">Open to Opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hey, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Drisya Giri
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Full-Stack Developer (MERN • React Native)
          </h2>

          {/* Recruiter-optimized description */}
          <p className="text-lg text-gray-400 max-w-xl mb-10">
            I build scalable, user-friendly web and mobile applications with
            clean code, modern UI, and real-world problem solving.
            Passionate about turning ideas into production-ready products.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="cursor-thumb px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 font-semibold shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="cursor-thumb px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Tech stack */}
          <div className="mt-10">
            <p className="text-gray-400 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {["React", "Node", "MongoDB", "Express", "TypeScript", "Tailwind"].map(
                tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Image */}
            <img
              src={profilepic}
              alt="Drisya Giri"
              className="relative w-full object-cover drop-shadow-2xl mask-gradient"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
};

export default Hero;
