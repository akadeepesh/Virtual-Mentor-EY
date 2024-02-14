import HomeNav from "@/components/HomeNav";
import Home from "@/components/Home";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Head>
          <title>Home</title>
        </Head>
        <div>
          <HomeNav />
        </div>
      </div>
      <Home />
    </div>
  );
};

export default HomePage;
