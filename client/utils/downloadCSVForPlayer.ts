import { DOWNLOAD_CSV_PLAYER_URL } from "../constants";

export const csvPlayerURL = (name: string) =>
  `${DOWNLOAD_CSV_PLAYER_URL}${name}`;
