import React from "react";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const HomePage: React.FC = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col  max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-4">
          Welcome {user?.firstName}, to VirtualMentor
        </h1>
        <div className="">
          <p className="text-lg text-gray-600">
            This is the home page and still building, Thanks for your paitence.
          </p>
          <Link href={"/profile"}>
            <Button className="px-4 py-2 mt-4">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
