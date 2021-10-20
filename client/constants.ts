export const __prod__ = process.env.NODE_ENV === "production";

// API URLs
const BASE_URL = __prod__ ? "" : "http://localhost:4000/rushes";
export const GET_ALL_RUSHES = BASE_URL;
export const SEARCH_FOR_PLAYER = BASE_URL + "/player";
export const SORT_BY_YARDS = BASE_URL + "/sort/yards";
export const SORT_BY_TOUCHDOWNS = BASE_URL + "/sort/touchdowns";
export const SORT_BY_LONGEST_RUSH = BASE_URL + "/sort/longest";

// Data variants
export const NUM_ITEMS_PER_PAGE = [5, 10, 15, 25, 50];
