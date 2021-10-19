import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "../components/Header";
import { GET_ALL_RUSHES } from "../constants";
// import { useRushes } from "../contexts/RushesContext";
// import { useFetchRushes } from "../hooks/useFetchRushes";
import { PageDirection, RushesResult } from "../types";
import { getNewData } from "../utils/getNewData";

interface HomeProps {
  _rushData: RushesResult;
}

const Home: NextPage<HomeProps> = ({ _rushData }) => {
  const [rushData, setRushData] = useState(_rushData);
  const [loading, setLoading] = useState(false);

  const recieveNewData = async (direction: PageDirection) => {
    const newData = await getNewData(rushData, GET_ALL_RUSHES, direction);
    console.log("NewData:", newData);
    if (newData === null) return; // add error
    setRushData(newData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Header />
      {rushData &&
        rushData.results.map((rush) => {
          return <div key={rush._id}>{rush.Player}</div>;
        })}
      <button
        className="rounded-md p-2 bg-gray-800"
        onClick={() => recieveNewData("prev")}
      >
        Prev
      </button>
      <button
        className="rounded-md p-2 bg-gray-800"
        onClick={() => recieveNewData("next")}
      >
        Next
      </button>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(GET_ALL_RUSHES);
  const _rushData: RushesResult = await res.json();

  return {
    props: {
      _rushData,
    },
  };
}

export default Home;
