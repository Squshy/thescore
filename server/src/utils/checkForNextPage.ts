import { PaginationResult } from "../types";

export const checkForNextPage = (results: PaginationResult, limit: number) => {
  // If the results (1 greater than it should be) is less than or equal to the limit
  // set next page to null
  if (results.results.length <= limit) results.next = null;
  // Pop the last result as we don't actually want it, just wanna see if there is another page after this or not
  results.results.pop();
};
