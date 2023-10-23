import Head from "next/head"
import LandingNav from '@/components/LandingNav';
import LandingHero from '@/components/LandingHero';
import About from '@/components/About';
import FAQ from '@/components/Faq';

const landing = () => {
  return (
    <div className="">
      <Head><title>VirtualMentor</title></Head>
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <LandingNav />
      </div>
      <LandingHero />
      <About />
      <FAQ />
    </div>
  )
}

export default landing
