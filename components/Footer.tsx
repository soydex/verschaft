
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-700/50 mt-20">
      <div className="container mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="font-space-grotesk text-xl font-bold tracking-tighter text-gradient mb-4 md:mb-0">
            Verschafft
          </div>
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Verschaft. Your personal metaverse.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Discord</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
