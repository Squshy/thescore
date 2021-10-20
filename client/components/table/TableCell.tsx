import React from "react";

interface TableCellProps {
  text: string | number;
}

export const TableCell: React.FC<TableCellProps> = ({ text }) => {
  return <td className="p-2 text-center text-gray-400">{text !== undefined ? text : '-'}</td>;
};
