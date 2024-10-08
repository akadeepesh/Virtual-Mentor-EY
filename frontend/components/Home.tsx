import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HomePage: React.FC = () => {
  const wordsOne = [
    {
      text: "Make",
    },
    {
      text: "Your",
    },
    {
      text: "Future",
    },
    {
      text: "With",
    },
    {
      text: "Us.",
    },
  ];
  return (
    <div className="h-[46rem] md:h-[40rem] relative md:w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full absolute h-full"
        particleColor="#79E6F3"
      />
      <div className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-primary relative z-20 select-none">
        <TypewriterEffectSmooth cursorClassName="bg-primary" words={wordsOne} />
        <div className="bg-gradient-to-tr from-blue-500 to-indigo-700 text-5xl lg:text-6xl bg-clip-text text-transparent">
          VirtualMentor
        </div>
        <br />
      </div>
    </div>
  );
};

export default HomePage;
