import { Transition } from "@headlessui/react";
import React from "react";
import { DataFilter, Rush } from "../../types";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface RushesDisplayProps {
  rushes: Rush[];
  sortData: (link: string, filter: DataFilter) => void;
}

export const RushesDisplay: React.FC<RushesDisplayProps> = ({
  rushes,
  sortData,
}) => {
  if (rushes.length <= 0) return <div className="w-full bg-white bg-opacity-5 p-4 rounded-sm text-gray-500 text-center text-lg font-thin shadow-md">No data to display.</div>;
  return (
    <Transition
      appear={true}
      show={true}
      as={"div"}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
    <div className="overflow-x-auto overflow-y-auto">
      <table className="min-w-full divide-y divide-gray-600 overflow-x-auto">
        <TableHeader
          sort={sortData}
        />
        <TableBody rushes={rushes} />
      </table>
    </div>
    </Transition>
  );
};
