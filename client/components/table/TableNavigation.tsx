import React from "react";
import { NavButton } from "./NavButton";

interface TableNavigationProps {
  next: () => void;
  prev: () => void;
}

export const TableNavigation: React.FC<TableNavigationProps> = ({
  next,
  prev,
}) => {
  return (
    <div className="flex py-4 justify-between">
      <div className="-m-2">
        <NavButton text="Prev" func={prev} />
        <NavButton text="Next" func={next} />
      </div>
    </div>
  );
};
