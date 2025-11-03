import React from "react";

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
        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          <span className="text-white">Verschafft isn't just a metaverse,</span>
          <br />
          <span className="text-gradient">it's your universe.</span>
        </h1>
        <p className="font-manrope text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Craft your personal 3D space. A unique virtual room that represents
          your identity, your passions, and your digital soul. Your place in the
          metaverse awaits.
        </p>
        <div className="flex justify-center">
          <a
            href="#waitlist"
            className="font-urbanist text-lg font-semibold text-zinc-900 bg-gradient-to-r from-[#A16EFF] via-[#60F9B8] to-[#00B8FF] px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-cyan-400/50 hover:scale-105"
          >
            Create Your Space
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
