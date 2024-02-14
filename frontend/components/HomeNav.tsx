import { UserButton } from "@clerk/nextjs";
// import Link from 'next/link';
import { NavigationMenuDemo } from "@/components/Navigation";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

const HomeNav = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="flex md:mt-4 justify-between h-20 items-center mx-auto max-w-screen-xl w-screen">
      <div className="">
        <a
          href="/"
          className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200"
        >
          VirtualMentor
        </a>
      </div>
      <div className="flex flex-row md:gap-8">
        <div className="hidden md:flex justify-center items-center">
          <div className="flex flex-row gap-8">
            <NavigationMenuDemo />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <button
            className="md:hidden flex justify-center items-center"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <ThemeToggle />
          <div
            className={`${nav ? "h-[40vh]" : "h-0"} w-full ${
              nav ? "translate-y-16" : "-translate-y-40"
            } flex md:hidden bg-card ease-in-out duration-300`}
          >
            <NavigationMenuDemo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeNav;
