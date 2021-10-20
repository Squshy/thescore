import { DOWNLOAD_CSV } from "../constants";
import { DataFilter } from "../types";

export const csvURLParser = (dataFilter: DataFilter): string => {
  const { filter, direction, name } = dataFilter;
  if (filter === "default") return DOWNLOAD_CSV;
  if (direction !== undefined) {
    return `${DOWNLOAD_CSV}?sort=${filter}&dir=${direction}`;
  } else if (name !== undefined) {
    return `${DOWNLOAD_CSV}?sort=${filter}&player=${name}`;
  } else
    throw new Error(
      "Invalid data passed to csvURLParser.  Either pass a direction or a name."
    );
};
