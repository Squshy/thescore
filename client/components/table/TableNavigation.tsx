import { SaveIcon } from "@heroicons/react/outline";
import React from "react";
import { NumPerPageButton } from "../NumPerPageButton";
import { NavButton } from "./NavButton";

interface TableNavigationProps {
  next: () => void;
  prev: () => void;
  updateLimit: (newNum: number) => void;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export const TableNavigation: React.FC<TableNavigationProps> = ({
  next,
  prev,
  updateLimit,
  limit,
  hasNext,
  hasPrev,
}) => {
  return (
    <div className="flex md:flex py-4 flex-wrap-reverse justify-center space-y-2 md:flex-no-wrap md:justify-between">
      <div className="-m-2 flex items-center">
        <NavButton func={prev} show={hasPrev}>
          Prev
        </NavButton>
        <NavButton func={next} show={hasNext}>
          Next
        </NavButton>
      </div>
      <div className="-m-2 flex items-center">
        <NavButton func={() => {}}>
          <div className="flex items-center -m-1">
            <SaveIcon className="w-5 h-5 m-1" />
            <p className="m-1 text-sm font-thin">Save as CSV</p>
          </div>
        </NavButton>
        <NumPerPageButton
          updateLimit={updateLimit}
          limit={limit}
          className="w-20"
        />
      </div>
    </div>
  );
};
