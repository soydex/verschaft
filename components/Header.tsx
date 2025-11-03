
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between p-4 rounded-2xl glass-card">
          <div className="font-space-grotesk text-2xl font-bold tracking-tighter text-gradient">
            Verschafft
          </div>
          <a
            href="#waitlist"
            className="font-urbanist font-semibold text-zinc-900 bg-gradient-to-r from-[#A16EFF] via-[#60F9B8] to-[#00B8FF] px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-cyan-400/50 hover:scale-105"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
