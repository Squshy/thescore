import { SaveIcon } from "@heroicons/react/outline";
import React from "react";
import { NumPerPageButton } from "../NumPerPageButton";
import { NavButton } from "./NavButton";

interface TableNavigationProps {
  next: () => void;
  prev: () => void;
  updateLimit: (newNum: number) => void;
  limit: number;
}

export const TableNavigation: React.FC<TableNavigationProps> = ({
  next,
  prev,
  updateLimit,
  limit,
}) => {
  return (
    <div className="flex md:flex py-4 flex-wrap-reverse justify-center space-y-2 md:flex-no-wrap md:justify-between">
      <div className="-m-2 flex items-center">
        <NavButton func={prev}>Prev</NavButton>
        <NavButton func={next}>Next</NavButton>
      </div>
      <div className="-m-2 flex items-center">
        <NavButton func={() => {}}>
          <div className="flex items-center -m-1">
            <SaveIcon className="w-5 h-5 m-1" />
            <p className="m-1 text-sm font-thin">Save as CSV</p>
          </div>
        </NavButton>
        <NumPerPageButton updateLimit={updateLimit} limit={limit} />
      </div>
    </div>
  );
};
