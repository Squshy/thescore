import type { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Header />
    </div>
  );
};

export default Home;
