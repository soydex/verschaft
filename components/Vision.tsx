import React from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  const keywords = ["bubble", "glass", "neon", "fluid", "metaverse", "personal space", "aura"];

  return (
    <section id="vision" className="py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">Artistic Direction:</span>
            <br />
            <span className="text-gradient">Human Futurism</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're building a chill, futuristic ambiance inspired by Neo-glass morphism, Vaporsoft, and Dreamy Neon aesthetics. It's a fusion of digital and emotional, where high-tech feels soft, inviting, and deeply personal.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {keywords.map((word, index) => (
              <motion.span 
                key={word} 
                className="font-urbanist font-semibold text-sm glass-card py-2 px-4 rounded-full border border-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "rgba(161, 161, 170, 0.5)",
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 w-full h-80 relative flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
            <div className="absolute w-full h-full">
                <motion.div 
                  className="absolute top-0 left-10 w-48 h-48 bg-[#A16EFF]/30 rounded-full filter blur-2xl"
                  animate={{
                    y: [0, 30, -20, 0],
                    x: [0, -20, 15, 0],
                    scale: [1, 1.1, 0.9, 1]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute top-20 right-10 w-48 h-48 bg-[#60F9B8]/30 rounded-full filter blur-2xl"
                  animate={{
                    y: [0, -30, 20, 0],
                    x: [0, 15, -10, 0],
                    scale: [1, 0.9, 1.1, 1]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-0 left-20 w-48 h-48 bg-[#00B8FF]/30 rounded-full filter blur-2xl"
                  animate={{
                    y: [0, 20, -15, 0],
                    x: [0, 10, -20, 0],
                    scale: [1, 1.05, 0.95, 1]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                ></motion.div>
            </div>
            <motion.div 
              className="relative glass-card rounded-3xl w-2/3 h-2/3 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
                 <motion.p 
                   className="font-space-grotesk text-2xl text-white font-bold"
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.6 }}
                 >
                   Neo-Glass
                 </motion.p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;