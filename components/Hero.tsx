import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="py-24 md:py-40 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
        <style>{`
          .grid-background {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(to right, rgba(161, 161, 170, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(161, 161, 170, 0.1) 1px, transparent 1px);
            background-size: 4rem 4rem;
            animation: move-grid 20s linear infinite;
            mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 100%);
          }

          @keyframes move-grid {
            0% { background-position: 0 0; }
            100% { background-position: 4rem 4rem; }
          }
        `}</style>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="text-white inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Verschaft isn't just a metaverse,
          </motion.span>
          <br />
          <motion.span 
            className="text-gradient inline-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            it's your universe.
          </motion.span>
        </motion.h1>
        <motion.p 
          className="font-manrope text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Craft your personal 3D space. A unique virtual room that represents
          your identity, your passions, and your digital soul. Your place in the
          metaverse awaits.
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a
            href="#waitlist"
            className="font-urbanist text-lg font-semibold text-zinc-900 bg-gradient-to-r from-[#A16EFF] via-[#60F9B8] to-[#00B8FF] px-8 py-4 rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 184, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 20px 25px -5px rgba(161, 110, 255, 0.3)",
                "0 20px 25px -5px rgba(0, 184, 255, 0.3)",
                "0 20px 25px -5px rgba(96, 249, 184, 0.3)",
                "0 20px 25px -5px rgba(161, 110, 255, 0.3)"
              ]
            }}
            transition={{ 
              boxShadow: { 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            Create Your Space
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
