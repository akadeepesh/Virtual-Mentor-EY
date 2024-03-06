import { UserButton } from "@clerk/nextjs";
import { NavigationMenuDemo } from "@/components/Navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/router";
import UserNavigation from "./UserNavigation";

const HomeNav = () => {
  const router = useRouter();

  return (
    <div className="flex md:mt-4 justify-between h-12 xl:h-20 items-center mx-auto md:max-w-screen-xl">
      <div className="ml-2 md:ml-0">
        <div
          onClick={() => router.push("/")}
          className="font-bold text-xl md:text-2xl mx-1 md:mx-4 bg-gradient-to-tr from-blue-500 to-indigo-700 bg-clip-text text-transparent duration-200 cursor-pointer"
        >
          VirtualMentor
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-8 mr-2 md:mr-0">
        <div className="hidden md:flex justify-center items-center">
          <div className="flex flex-row gap-8">
            <NavigationMenuDemo />
          </div>
        </div>
        <UserNavigation />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HomeNav;
