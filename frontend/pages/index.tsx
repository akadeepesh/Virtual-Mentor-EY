import HomeNav from "@/components/HomeNav";
const HomePage = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-auto w-screen max-w-screen-xl">
        <HomeNav />
        <hr />
        <div>
          Initial Screen Content
        </div>
      </div>
    </div>
  );
}

export default HomePage;
