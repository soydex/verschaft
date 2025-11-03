import React from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:border-cyan-400/50 hover:scale-105"
          >
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6 text-gradient">
              {feature.icon}
            </div>
            <h3 className="font-space-grotesk text-2xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="font-manrope text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
