import React, { useState } from "react";
import Head from "next/head";
import { FlagIcon, SearchIcon } from "@heroicons/react/outline";
import { GET_ALL_RUSHES, SEARCH_FOR_PLAYER } from "../constants";

interface HeaderProps {
  searchForPlayer: (playerName: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchForPlayer }) => {
  const [playerName, setPlayerName] = useState("");
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (playerName.length === 0) searchForPlayer(GET_ALL_RUSHES);
      else searchForPlayer(SEARCH_FOR_PLAYER + `/${playerName}`);
    }
  };

  return (
    <div>
      <Head>
        <title>NFL Rushing Info</title>
        <meta
          name="description"
          content="A site that displays rushing info by NFL players."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center py-4 px-4 border-b border-gray-700 justify-between h-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="text-2xl md:text-3xl mr-2 font-light">NFL Rushing</p>
          <FlagIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
        </div>
        <div className="relative text-gray-600 focus-within:text-gray-500">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              onClick={() => searchForPlayer(playerName)}
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
          </span>
          <input
            type="search"
            name="search"
            className="transition duration-150 ease-out py-2 text-sm text-gray-500 bg-gray-800 rounded-md pl-10 focus:outline-none focus:bg-gray-700 focus:text-gray-300 md:w-64"
            placeholder="Search players..."
            autoComplete="off"
            onKeyPress={handleKeyPress}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
