import React from "react";
import {
  SORT_BY_LONGEST_RUSH,
  SORT_BY_TOUCHDOWNS,
  SORT_BY_YARDS,
} from "../../constants";
import { TableHead } from "./TableHead";

interface TableHeaderProps {
  sort: (link: string) => void;
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
          sortAsc={() => sort(SORT_BY_YARDS + "/asc")}
          sortDesc={() => sort(SORT_BY_YARDS + "/desc")}
        />
        <TableHead text="Yds/G" />
        <TableHead
          text="TD"
          sortAsc={() => sort(SORT_BY_TOUCHDOWNS + "/asc")}
          sortDesc={() => sort(SORT_BY_TOUCHDOWNS + "/desc")}
        />
        <TableHead
          text="Lng"
          sortAsc={() => sort(SORT_BY_LONGEST_RUSH + "/asc")}
          sortDesc={() => sort(SORT_BY_LONGEST_RUSH + "/desc")}
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
