import React from "react";
// import { Button } from "./ui/button";
// import { useUser } from "@clerk/nextjs";
// import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HomePage: React.FC = () => {
  // const { user } = useUser();
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
    // <div className="flex items-center justify-center mt-10">
    //   <div className="flex flex-col  max-w-screen-lg">
    //     <h1 className="text-4xl font-bold mb-4">
    //       Welcome {user?.firstName}, to VirtualMentor
    //     </h1>
    //     <div className="">
    //       <p className="text-lg text-gray-600">
    //         This is the home page and still building, Thanks for your paitence.
    //       </p>
    //       <Link href={"/profile"}>
    //         <Button className="px-4 py-2 mt-4">Get Started</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
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
        <div className="bg-gradient-to-tr from-blue-500 to-indigo-700 bg-clip-text text-transparent">
          VirtualMentor
        </div>
        <br />
        <div className="text-base">View Your Profile</div>
      </div>
    </div>
  );
};

export default HomePage;
