import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { NavigationMenuDemo } from "@/components/Navigation";

const HomeNav = () => {
  return (
    <header className='flex md:mt-4 justify-between h-20 items-center mx-auto max-w-screen-xl w-screen'>
      <a href="/" className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200">VirtualMentor</a>
      <div className="flex justify-center items-center">
        <div className="mr-10"><NavigationMenuDemo /></div>
        {/* <nav className="space-x-16 mr-20">
          <Link href="/contact" className="font-medium duration-200 hover:text-blue-700">Contact Us</Link>
          <Link href="/about" className="font-medium duration-200 hover:text-blue-700">About</Link>
          <Link href="https://github.com/akadeepesh/VirtualMentor" className="font-medium duration-200 hover:text-blue-700" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </nav> */}
        <div className="">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  )
}

export default HomeNav
