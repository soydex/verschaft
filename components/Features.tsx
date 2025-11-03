import React from "react";
import { motion } from "framer-motion";

const CubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

const features = [
  {
    icon: <UserIcon />,
    title: "Stylized 3D Avatar",
    description:
      "Create a modern, bubble-style 3D avatar that is uniquely you, setting the stage for your digital identity.",
  },
  {
    icon: <CubeIcon />,
    title: "Customizable Room",
    description:
      "Build your dream space. Select and place 3D items to replicate your real room or invent a fantasy world.",
  },
  {
    icon: <LinkIcon />,
    title: "Unique Shareable Link",
    description:
      "Every user gets a personal link (verschaft.place/username) to showcase their public virtual room to the world.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="static-grid-background"></div>
        <style>{`
          .static-grid-background {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(to right, rgba(161, 161, 170, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(161, 161, 170, 0.05) 1px, transparent 1px);
            background-size: 3rem 3rem;
            mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black 60%, transparent 100%);
          }
        `}</style>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-2xl p-8 text-center"
            variants={item}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(34, 211, 238, 0.5)",
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            <motion.div 
              className="inline-block p-4 bg-white/10 rounded-full mb-6 text-gradient"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200,
                damping: 10 
              }}
            >
              {feature.icon}
            </motion.div>
            <motion.h3 
              className="font-space-grotesk text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className="font-manrope text-zinc-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
