import React from "react";
import { Rush } from "../../types";
import { TableCell } from "./TableCell";

interface TableBodyProps {
  rushes: Rush[];
}

export const TableBody: React.FC<TableBodyProps> = ({ rushes }) => {
  console.log("Rushes:", rushes);
  return (
    <tbody className="divide-y divide-gray-700">
      {rushes.map((rush) => {
        return (
          <tr key={rush._id} className="bg-gray-700 bg-opacity-25">
            <TableCell text={rush.Player} />
            <TableCell text={rush.Team} />
            <TableCell text={rush.Pos} />
            <TableCell text={rush.Att} />
            <TableCell text={rush["Att/G"]} />
            <TableCell text={rush.Avg} />
            <TableCell text={rush.Yds} />
            <TableCell text={rush["Yds/G"]} />
            <TableCell text={rush.TD} />
            <TableCell text={rush.Lng} />
            <TableCell text={rush["1st"]} />
            <TableCell text={rush["1st%"]} />
            <TableCell text={rush["20+"]} />
            <TableCell text={rush["40+"]} />
            <TableCell text={rush.FUM} />
          </tr>
        );
      })}
    </tbody>
  );
};
