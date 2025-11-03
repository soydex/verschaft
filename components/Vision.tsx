import React from 'react';

const Vision: React.FC = () => {
  const keywords = ["bubble", "glass", "neon", "fluid", "metaverse", "personal space", "aura"];

  return (
    <section id="vision" className="py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-white">Artistic Direction:</span>
            <br />
            <span className="text-gradient">Human Futurism</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-6">
            We're building a chill, futuristic ambiance inspired by Neo-glass morphism, Vaporsoft, and Dreamy Neon aesthetics. It's a fusion of digital and emotional, where high-tech feels soft, inviting, and deeply personal.
          </p>
          <div className="flex flex-wrap gap-3">
            {keywords.map((word) => (
              <span key={word} className="font-urbanist font-semibold text-sm glass-card py-2 px-4 rounded-full border border-transparent hover:border-zinc-500 transition-colors">
                {word}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-80 relative flex items-center justify-center">
            <div className="absolute w-full h-full">
                <div className="absolute top-0 left-10 w-48 h-48 bg-[#A16EFF]/30 rounded-full filter blur-2xl animate-blob"></div>
                <div className="absolute top-20 right-10 w-48 h-48 bg-[#60F9B8]/30 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-20 w-48 h-48 bg-[#00B8FF]/30 rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative glass-card rounded-3xl w-2/3 h-2/3 flex items-center justify-center">
                 <p className="font-space-grotesk text-2xl text-white font-bold">Neo-Glass</p>
            </div>
             {/* Fix(components/Vision.tsx): Removed unsupported 'jsx' prop from the <style> tag. This is a Next.js feature (styled-jsx) and is not supported in this CRA-like environment. */}
             <style>{`
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
            `}</style>
        </div>
      </div>
    </section>
  );
};

export default Vision;