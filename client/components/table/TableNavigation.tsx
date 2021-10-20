import { SaveIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { DataFilter, Rush } from "../../types";
import { CSVModal } from "../modal/CSVModal";
import { NumPerPageButton } from "../NumPerPageButton";
import { NavButton } from "./NavButton";

interface TableNavigationProps {
  next: () => void;
  prev: () => void;
  updateLimit: (newNum: number) => void;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
  dataFilter: DataFilter;
  rushes: Rush[];
}

export const TableNavigation: React.FC<TableNavigationProps> = ({
  next,
  prev,
  updateLimit,
  limit,
  hasNext,
  hasPrev,
  dataFilter,
  rushes,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
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
          <NavButton func={() => setIsModalOpen(true)}>
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
      <CSVModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        dataFilter={dataFilter}
        rushes={rushes}
      />
    </>
  );
};
