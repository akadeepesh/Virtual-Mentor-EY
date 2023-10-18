import Link from 'next/link';
import { ThemeToggle } from "./ThemeToggle";

const LandingNav = () => {
    return (
        <nav className='flex md:mt-4 justify-between h-20 items-center mx-auto max-w-screen-xl w-screen'>
            <a href="/" className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200">VirtualMentor</a>
            <span className="">
                <Link href={'/sign-up'} className="bg-white text-black rounded-md py-2 md:mx-2 px-3 md:px-5 cursor-pointer font-medium hover:bg-gray-300 duration-200">Sign up</Link>
                <Link href={'/sign-in'} className="rounded-md bg-blue-700 py-2 mx-2 px-3 md:px-5 cursor-pointer font-medium hover:bg-blue-800 duration-200">Login</Link>
            </span>
          <ThemeToggle className="top-6 right-6 absolute"/>
        </nav>
    )
}

export default LandingNav
