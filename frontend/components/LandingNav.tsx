import { ThemeToggle } from "./ThemeToggle";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/router";

const LandingNav = () => {
  const router = useRouter();
  return (
    <nav className="flex md:mt-4 justify-between h-20 items-center mx-auto max-w-screen-xl w-screen">
      <div
        onClick={() => router.push("/")}
        className="font-bold text-xl md:text-2xl mx-1 md:mx-4 duration-200 cursor-pointer"
      >
        VirtualMentor
      </div>
      <div className="flex justify-end items-center">
        <span className="flex">
          <div
            onClick={() => router.push("/sign-up")}
            className="bg-white text-black rounded-md py-2 md:mx-2 px-3 md:px-5 cursor-pointer font-medium hover:bg-gray-300 duration-200"
          >
            <SignUpButton />
          </div>
          <div
            onClick={() => router.push("/sign-in")}
            className="rounded-md bg-blue-700 py-2 mx-2 px-3 md:px-5 cursor-pointer font-medium hover:bg-blue-800 duration-200"
          >
            <SignInButton />
          </div>
        </span>
        <ThemeToggle className="" />
      </div>
    </nav>
  );
};

export default LandingNav;
