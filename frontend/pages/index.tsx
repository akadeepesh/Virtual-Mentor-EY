import HomeNav from "@/components/HomeNav";
import Home from "@/components/Home";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>VirtualMentor | Home</title>
      </Head>
      <HomeNav />
      <Home />
    </div>
  );
};

export default HomePage;
