import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Vision from "./components/Vision";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#a16eff30] to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.3, 0.4, 0.35, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-gradient-to-bl from-[#00b8ff30] to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.95, 1.05, 1],
            opacity: [0.3, 0.35, 0.4, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[30%] right-[5%] w-[40vw] h-[40vw] bg-gradient-to-tl from-[#60f9b820] to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.05, 0.9, 1],
            opacity: [0.2, 0.3, 0.25, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main className="container mx-auto px-6 md:px-8">
          <Hero />
          <Features />
          <Vision />
          <Roadmap />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
