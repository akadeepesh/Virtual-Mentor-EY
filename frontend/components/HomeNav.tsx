import { UserButton } from "@clerk/nextjs";
// import Link from 'next/link';
import { NavigationMenuDemo } from "@/components/Navigation";
import { useState } from "react";
import {FaTimes, FaBars} from 'react-icons/fa';

const HomeNav = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className='flex md:mt-4 justify-between h-20 items-center p-4 md:mx-auto max-w-screen-xl w-screen'>
      <a href="/" className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200">VirtualMentor</a>
      <div className="hidden md:flex justify-center items-center">
        <div className=""><NavigationMenuDemo /></div>
        {/* <nav className="space-x-16 mr-20">
          <Link href="/contact" className="font-medium duration-200 hover:text-blue-700">Contact Us</Link>
          <Link href="/about" className="font-medium duration-200 hover:text-blue-700">About</Link>
          <Link href="https://github.com/akadeepesh/VirtualMentor" className="font-medium duration-200 hover:text-blue-700" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </nav> */}
      </div>
      <button className='md:hidden mr-2' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <div className={`${nav ? 'h-[40vh]' : 'h-0'} w-full ${nav ? 'translate-y-16' : '-translate-y-40'} flex md:hidden absolute bg-card justify-center top-0 left-0 items-center ease-in-out duration-300`}><NavigationMenuDemo /></div>
      <div className="">
          <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}

export default HomeNav
