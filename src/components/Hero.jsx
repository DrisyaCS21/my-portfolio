import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "../assets/bg.JPG";

// ================= HERO =================
const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);
  const textY = useTransform(scrollY, [0, 400], [0, -120]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* BG */}
      <motion.div
      className="absolute inset-0 bg-center bg-cover"
        style={{
          scale,
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mt-18 right-4 text-white hover:scale-105 transition">
       <p>Where Idea <br></br> Meets Innovation.</p>
      </div>
       {/* CTA button */}
        <a
          href="#projects"
          className="relative z-10 mt-50 right-37 px-6 py-3 bg-gray-200/80 text-black rounded-xl hover:scale-105 transition"
        >
          View My Projects
        </a>

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
