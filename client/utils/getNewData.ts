import { PageDirection, RushesResult } from "../types";

export const getNewData = async (
  current: RushesResult,
  url: string,
  direction: PageDirection
): Promise<RushesResult | null> => {
  const { prev, next, limit } = current;
  if (direction === "next" && next === null) return null;
  if (direction === "prev" && prev === null) return null;
  const pageToView = direction === "next" ? next : prev;
  const res = await fetch(url + `?page=${pageToView}&limit=${limit}`);
  return await res.json();
};
