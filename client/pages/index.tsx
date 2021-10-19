import type { NextPage } from "next";
import { useState } from "react";
import { BodyWrapper } from "../components/BodyWrapper";
import { Header } from "../components/Header";
import { RushesDisplay } from "../components/table/RushesDisplay";
import { TableNavigation } from "../components/table/TableNavigation";
import { GET_ALL_RUSHES } from "../constants";
import { PageDirection, RushesResult } from "../types";
import { getNewData } from "../utils/getNewData";

interface HomeProps {
  _rushData: RushesResult;
}

const Home: NextPage<HomeProps> = ({ _rushData }) => {
  const [rushData, setRushData] = useState(_rushData);
  const [loading, setLoading] = useState(false);

  const recieveNewData = async (direction: PageDirection) => {
    setLoading(true);
    const newData = await getNewData(rushData, GET_ALL_RUSHES, direction);
    if (newData === null) return; // add error
    setRushData(newData);
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Header />
      <BodyWrapper>
        <RushesDisplay rushes={rushData.results} />
        <TableNavigation
          next={() => recieveNewData("next")}
          prev={() => recieveNewData("prev")}
        />
      </BodyWrapper>
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
