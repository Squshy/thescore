export const __prod__ = process.env.NODE_ENV === "production";
export const GET_ALL_RUSHES = __prod__ ? "" : "http://localhost:4000/rushes";

export const NUM_ITEMS_PER_PAGE = [5, 10, 15, 25, 50];
