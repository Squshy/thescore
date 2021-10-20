import type { NextPage } from "next";
import { useState } from "react";
import { BodyWrapper } from "../components/BodyWrapper";
import { Header } from "../components/Header";
import { RushesDisplay } from "../components/table/RushesDisplay";
import { TableNavigation } from "../components/table/TableNavigation";
import { GET_ALL_RUSHES } from "../constants";
import { DataFilter, PageDirection, RushesResult } from "../types";
import { getNewData } from "../utils/getNewData";

interface HomeProps {
  _rushData: RushesResult;
}

const Home: NextPage<HomeProps> = ({ _rushData }) => {
  const [rushData, setRushData] = useState(_rushData);
  const [currentLink, setCurrentLink] = useState<string>(GET_ALL_RUSHES);
  const [currentFilter, setCurrentFilter] = useState<DataFilter>({
    filter: "default",
    direction: undefined,
    name: undefined,
  });

  const recieveNewData = async (direction?: PageDirection, link?: string) => {
    const newData = await getNewData(
      rushData,
      link ? link : currentLink,
      direction
    );
    if (newData === null) return; // add error
    setRushData(newData);
  };

  const updateLimit = (limit: number) => {
    setRushData({ ...rushData, limit: limit });
  };

  const updateFetchLink = (newLink: string, filter: DataFilter) => {
    if (newLink === currentLink) return;
    setCurrentLink(newLink);
    setCurrentFilter(filter);
    recieveNewData(undefined, newLink);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      <Header searchForPlayer={updateFetchLink} />
      <BodyWrapper>
        <RushesDisplay rushes={rushData.results} sortData={updateFetchLink} />
        {rushData.results.length > 0 && (
          <TableNavigation
            next={() => recieveNewData("next")}
            prev={() => recieveNewData("prev")}
            updateLimit={updateLimit}
            limit={rushData.limit}
            hasNext={rushData.next !== null}
            hasPrev={rushData.prev !== null}
            dataFilter={currentFilter}
            rushes={rushData.results}
          />
        )}
      </BodyWrapper>
      <footer className="h-32 border-t border-gray-700 flex items-center justify-center text-gray-700">
        Calvin Lapp
      </footer>
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
