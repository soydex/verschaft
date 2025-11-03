import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Vision from "./components/Vision";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-zinc-800 min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#a16eff30] to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-gradient-to-bl from-[#00b8ff30] to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-[30%] right-[5%] w-[40vw] h-[40vw] bg-gradient-to-tl from-[#60f9b820] to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-8">
          <Hero />
          <Features />
          <Vision />
          <Roadmap />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
