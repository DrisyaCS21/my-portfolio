import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "../assets/bg.JPG";
import { useNavigate } from "react-router-dom";

// ================= HERO =================
const Hero = () => {
  const { scrollY } = useScroll();

  // background zoom effect
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);

  // text slight upward movement
  const textY = useTransform(scrollY, [0, 400], [0, -80]);

  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          scale,
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4"
      >
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Where Idea <br /> Meets Innovation.
        </h1>

        {/* Button */}
        <button
          className="mt-6 px-6 py-3 cursor-pointer bg-gray-200/90 text-black rounded-xl hover:scale-105 transition"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/projects");
          }}
        >
          View My Projects
        </button>
      </motion.div>
    </section>
  );
};

// ================= PAGE =================
export default function ReemHome() {
  return (
    <div className="bg-black font-sans">
      <Hero />
    </div>
  );
}