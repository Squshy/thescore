import React from "react";
import {
  SORT_BY_LONGEST_RUSH,
  SORT_BY_TOUCHDOWNS,
  SORT_BY_YARDS,
} from "../../constants";
import { DataFilter } from "../../types";
import { TableHead } from "./TableHead";

interface TableHeaderProps {
  sort: (link: string, filter: DataFilter) => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ sort }) => {
  return (
    <thead className="bg-gray-800 rounded-md">
      <tr>
        <TableHead text="Player" />
        <TableHead text="Team" />
        <TableHead text="Pos" />
        <TableHead text="Att" />
        <TableHead text="Att/G" />
        <TableHead text="Avg" />
        <TableHead
          text="Yds"
          sortAsc={() =>
            sort(SORT_BY_YARDS + "/asc", { filter: "yards", direction: "asc" })
          }
          sortDesc={() =>
            sort(SORT_BY_YARDS + "/desc", {
              filter: "yards",
              direction: "desc",
            })
          }
        />
        <TableHead text="Yds/G" />
        <TableHead
          text="TD"
          sortAsc={() =>
            sort(SORT_BY_TOUCHDOWNS + "/asc", {
              filter: "touchdowns",
              direction: "asc",
            })
          }
          sortDesc={() =>
            sort(SORT_BY_TOUCHDOWNS + "/desc", {
              filter: "touchdowns",
              direction: "desc",
            })
          }
        />
        <TableHead
          text="Lng"
          sortAsc={() =>
            sort(SORT_BY_LONGEST_RUSH + "/asc", {
              filter: "longest",
              direction: "asc",
            })
          }
          sortDesc={() =>
            sort(SORT_BY_LONGEST_RUSH + "/desc", {
              filter: "longest",
              direction: "desc",
            })
          }
        />
        <TableHead text="1st" />
        <TableHead text="1st%" />
        <TableHead text="20+" />
        <TableHead text="40+" />
        <TableHead text="FUM" />
      </tr>
    </thead>
  );
};
