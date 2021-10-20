import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React from "react";

interface TableHeadProps {
  text: string;
  sortAsc?: () => void;
  sortDesc?: () => void;
}

const COMMON_ICON_STYLES =
  "transition transform duration-150 ease-out h-4 w-4 m-px group-focus:text-white group-hover:text-gray-200 group-hover:scale-125";

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
          <button onClick={sortAsc} className="group">
            <ChevronUpIcon className={COMMON_ICON_STYLES} />
          </button>
        )}
        {sortDesc && (
          <button onClick={sortDesc} className="group">
            <ChevronDownIcon className={COMMON_ICON_STYLES} />
          </button>
        )}
      </div>
    </th>
  );
};
