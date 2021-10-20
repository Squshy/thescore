import { Rush } from "../types";
import { hasKey } from "./hasKey";

export const rushesToCSV = (rushes: Rush[]) => {
  const header = Object.keys(rushes[0]);
  header.shift(); // remove the mongoose '_id' field
  const csv = [
    header.join(","), // header row first
    ...rushes.map((row: Rush) =>
      header
        .map(
          (fieldName) =>
            JSON.stringify(hasKey(row, fieldName) ? row[fieldName] : "") // empty if no value
        )
        .join(",")
    ),
  ].join("\r\n");
  return new Blob([csv], {type: 'text/csv'})
};