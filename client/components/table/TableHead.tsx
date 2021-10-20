import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React from "react";

interface TableHeadProps {
  text: string;
  sortAsc?: () => void;
  sortDesc?: () => void;
}

export const TableHead: React.FC<TableHeadProps> = ({
  text,
  sortAsc,
  sortDesc,
}) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      <div className="flex -m-px items-center">
        <p className="m-px">{text}</p>
        {sortAsc && (
          <button onClick={sortAsc}>
            <ChevronUpIcon className="h-4 w-4 m-px" />
          </button>
        )}
        {sortDesc && (
          <button onClick={sortDesc}>
            <ChevronDownIcon className="h-4 w-4 m-px" />
          </button>
        )}
      </div>
    </th>
  );
};
