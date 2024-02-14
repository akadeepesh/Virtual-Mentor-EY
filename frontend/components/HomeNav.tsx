import { UserButton } from "@clerk/nextjs";
import { NavigationMenuDemo } from "@/components/Navigation";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

const HomeNav = () => {
  return (
    <div className="flex md:mt-4 justify-between h-12 xl:h-20 items-center mx-auto md:max-w-screen-xl">
      <div className="ml-2 md:ml-0">
        <a
          href="/"
          className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200"
        >
          VirtualMentor
        </a>
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-8 mr-2 md:mr-0">
        <div className="hidden md:flex justify-center items-center">
          <div className="flex flex-row gap-8">
            <NavigationMenuDemo />
          </div>
        </div>
        <UserButton afterSignOutUrl="/" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HomeNav;
