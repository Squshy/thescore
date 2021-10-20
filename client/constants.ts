export const __prod__ = process.env.NODE_ENV === "production";
const BASE_URL = "http://localhost:4000/rushes";
export const GET_ALL_RUSHES = __prod__ ? "" : BASE_URL;
export const SEARCH_FOR_PLAYER = __prod__ ? "" : BASE_URL + "/player";
export const NUM_ITEMS_PER_PAGE = [5, 10, 15, 25, 50];
