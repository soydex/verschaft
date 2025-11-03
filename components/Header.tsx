import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-8 py-4">
        <motion.div 
          className="flex items-center justify-between p-4 rounded-2xl glass-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="font-space-grotesk text-2xl font-bold tracking-tighter text-gradient"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Verschaft
          </motion.div>
          <motion.a
            href="#waitlist"
            className="font-urbanist font-semibold text-zinc-900 bg-gradient-to-r from-[#A16EFF] via-[#60F9B8] to-[#00B8FF] px-6 py-2 rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 184, 255, 0.5), 0 10px 10px -5px rgba(0, 184, 255, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Join Waitlist
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;