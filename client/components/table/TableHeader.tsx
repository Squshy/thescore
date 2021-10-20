import React from "react";
import { Rush } from "../../types";

interface TableHeaderProps {}

export const TableHeader: React.FC<TableHeaderProps> = ({}) => {
  return (
    <thead className="bg-gray-800 rounded-md">
      <tr>
        {Header('Player')}
        {Header('Team')}
        {Header('Pos')}
        {Header('Att')}
        {Header('Att/G')}
        {Header('Avg')}
        {Header('Yds')}
        {Header('Yds/G')}
        {Header('TD')}
        {Header('Lng')}
        {Header('1st')}
        {Header('1st%')}
        {Header('20+')}
        {Header('40+')}
        {Header('FUM')}
      </tr>
    </thead>
  );
};

const Header = (text: string):JSX.Element => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {text}
    </th>
  );
};
