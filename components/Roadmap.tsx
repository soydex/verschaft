
import React from 'react';
import { motion } from 'framer-motion';

const roadmapPhases = [
  {
    phase: "Phase 1 - Prototype",
    timeline: "Months 1-2",
    goals: [
      "Branding & Visual Identity",
      "Basic 3D prototype with a cube room",
      "User authentication & public pages"
    ],
    isCompleted: true
  },
  {
    phase: "Phase 2 - MVP",
    timeline: "Months 3-5",
    goals: [
      "3D Editor (item placement, themes)",
      "Room saving system (MongoDB)",
      "Virtual currency & item shop"
    ],
    isCompleted: false
  },
  {
    phase: "Phase 3 - Public Beta",
    timeline: "Months 6-8",
    goals: [
      "Room extensions and shapes",
      "Interactive items (e.g., clickable links)",
      "Light social features (likes, visits)"
    ],
    isCompleted: false
  },
  {
    phase: "Phase 4 - Verschaft+",
    timeline: "Month 9+",
    goals: [
      "Premium Pass & Creative Marketplace",
      "Multi-room & multi-user mode",
      "Public API for external integrations"
    ],
    isCompleted: false
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20">
      <motion.h2 
        className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-white">Our Journey</span> <span className="text-gradient">Ahead</span>
      </motion.h2>
      <div className="relative max-w-2xl mx-auto">
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700 bg-gradient-to-b from-cyan-500 via-zinc-700 via-20% to-zinc-700"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        ></motion.div>
        {roadmapPhases.map((item, index) => (
          <motion.div 
            key={index} 
            className={` ${index % 2 === 0 ? 'flex-row-reverse' : ''} relative mb-12 flex items-center justify-between w-full`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100 
            }}
          >
            <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}></div>
            <motion.div 
              className="z-10 flex items-center order-1 bg-zinc-900 shadow-xl w-8 h-8 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.2 + 0.3,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ scale: 1.2 }}
            >
              <motion.div 
                className={`h-4 w-4 rounded-full mx-auto ${item.isCompleted ? 'bg-gradient-to-r from-[#60F9B8] to-[#00B8FF]' : 'bg-zinc-600'}`}
                animate={item.isCompleted ? {
                  boxShadow: [
                    "0 0 0 0 rgba(96, 249, 184, 0.7)",
                    "0 0 0 10px rgba(96, 249, 184, 0)",
                  ]
                } : {}}
                transition={item.isCompleted ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}}
              ></motion.div>
            </motion.div>
            <motion.div 
              className={`order-1 glass-card rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(34, 211, 238, 0.5)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.p 
                className="font-urbanist text-sm text-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {item.timeline}
              </motion.p>
              <motion.h3 
                className="mb-3 font-bold text-white text-lg font-space-grotesk"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {item.phase}
              </motion.h3>
              <ul className={`list-none text-sm leading-snug tracking-wide text-zinc-400 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                {item.goals.map((goal, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                  >
                    - {goal}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
