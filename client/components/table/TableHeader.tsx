import React from "react";
import { Rush } from "../../types";

interface TableHeaderProps {
  header: Rush;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ header }) => {
  return (
    <thead className="bg-gray-800 rounded-md">
      <tr>
        {Object.keys(header).map((field) => {
          if (field === "_id") return;
          return (
            <th
              key={field}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {field}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
