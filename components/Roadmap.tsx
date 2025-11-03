
import React from 'react';

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
      <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16">
        <span className="text-white">Our Journey</span> <span className="text-gradient">Ahead</span>
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700 bg-gradient-to-b from-cyan-500 via-zinc-700 via-20% to-zinc-700"></div>
        {roadmapPhases.map((item, index) => (
          <div key={index} className={` ${index % 2 === 0 ? 'flex-row-reverse' : ''} relative mb-12 flex items-center justify-between w-full`}>
            <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}></div>
            <div className="z-10 flex items-center order-1 bg-zinc-800 shadow-xl w-8 h-8 rounded-full">
              <div className={`h-4 w-4 rounded-full mx-auto ${item.isCompleted ? 'bg-gradient-to-r from-[#60F9B8] to-[#00B8FF]' : 'bg-zinc-600'}`}></div>
            </div>
            <div className={`order-1 glass-card rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <p className="font-urbanist text-sm text-cyan-400">{item.timeline}</p>
              <h3 className="mb-3 font-bold text-white text-lg font-space-grotesk">{item.phase}</h3>
              <ul className={`list-none text-sm leading-snug tracking-wide text-zinc-400 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                {item.goals.map((goal, i) => <li key={i}>- {goal}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
