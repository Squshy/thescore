import React from "react";
import Head from "next/head";
import { FlagIcon, SearchIcon } from "@heroicons/react/outline";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <Head>
        <title>NFL Rushing Info</title>
        <meta
          name="description"
          content="A site that displays rushing info by NFL players."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center py-4 px-4 border-b border-gray-700 justify-between h-16">
        <div className="flex items-center">
          <p className="text-3xl mr-2 font-light">NFL Rushing</p>
          <FlagIcon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <SearchIcon className="w64 h-6" />
            </button>
          </span>
          <input
            type="search"
            name="search"
            className="transition duration-150 ease-out py-2 text-sm text-white bg-gray-800 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search players..."
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
};
