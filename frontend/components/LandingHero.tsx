import React from 'react';
import Link from 'next/link';

const LandingHero = () => {
    return (
        <div className='flex my-20 flex-col items-center justify-center max-w-screen-xl w-screen mx-auto'>


            <h3 className='text-2xl md:text-4xl font-bold block my-2'>Elevate Your Learning Journey with</h3>
            <h1 className='text-6xl md:text-7xl bg-gradient-to-tr from-blue-500 to-indigo-700 bg-clip-text text-transparent font-bold my-2'>VirtualMentor</h1>
            <h2 className='text-3xl md:text-4xl font-bold my-2'>Your Study BFF!</h2>
            <div className="mt-2 text-sm text-center text-slate-200">
                Explore Limitless Learning with Our Open-Source, AI Companion: Study Any Subject, Anytime!
            </div>
            <div className="mt-12">
                <Link href={'/sign-up'} className="rounded-md bg-blue-700 py-2 mx-2 px-3 md:px-5 cursor-pointer font-medium hover:bg-blue-800 duration-200">Sign Up Today!</Link>
                <Link href='#aboutV' className="bg-white text-black rounded-md py-2 md:mx-2 px-3 md:px-5 cursor-pointer font-medium hover:bg-gray-300 duration-200">Learn More</Link>
            </div>


        </div>
    )
}

export default LandingHero
