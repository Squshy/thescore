import React from "react";
import { Rush } from "../../types";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface RushesDisplayProps {
  rushes: Rush[];
}

export const RushesDisplay: React.FC<RushesDisplayProps> = ({ rushes }) => {
  if (rushes.length <= 0) return <div>No data to display</div>;
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className="min-w-full divide-y divide-gray-600 overflow-x-auto">
        <TableHeader header={rushes[0]} />
        <TableBody rushes={rushes} />
      </table>
    </div>
  );
};
