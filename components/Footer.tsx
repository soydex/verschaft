
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-700/50 mt-20">
      <div className="container mx-auto px-6 md:px-8 py-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="font-space-grotesk text-xl font-bold tracking-tighter text-gradient mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Verschafft
          </motion.div>
          <motion.div 
            className="text-zinc-500 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Verschaft. Your personal metaverse.
          </motion.div>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="#" 
              className="text-zinc-500 hover:text-white transition-colors"
              whileHover={{ y: -2, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Twitter
            </motion.a>
            <motion.a 
              href="#" 
              className="text-zinc-500 hover:text-white transition-colors"
              whileHover={{ y: -2, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Discord
            </motion.a>
            <motion.a 
              href="#" 
              className="text-zinc-500 hover:text-white transition-colors"
              whileHover={{ y: -2, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
