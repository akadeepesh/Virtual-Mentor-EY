import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import HomeNav from "@/components/HomeNav";
import ProfileHero from "@/components/ProfileHero";

const Profile = () => {
  const { user } = useUser();
  const title = user
    ? `${user.firstName?.charAt(0).toLocaleUpperCase()}${user.firstName
        ?.slice(1)
        .toLowerCase()} Profile`
    : "Profile";
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <HomeNav />
      </div>
      <ProfileHero />
    </div>
  );
};
export default Profile;
