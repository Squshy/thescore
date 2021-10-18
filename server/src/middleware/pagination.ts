import { NextFunction, Request, Response } from "express";
import { User, UserResult } from "../types";

export const pagination = (
  model: User[],
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string);
    const limit = parseInt(req.query.limit as string);

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;

    const results: UserResult = {
      results: [],
      next: null,
      prev: null,
    };

    if (endIndex < model.length)
      results.next = {
        limit: limit,
        page: page + 1,
      };
    if (startIndex > 0)
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    results.results = model.slice(startIndex, endIndex);
    res.paginatedResults = results;
    next();
  };
};
