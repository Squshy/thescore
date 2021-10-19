import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { PaginationType } from "../types";

export const pagination = (model: Model<any>) => {
  return async (req: Request, res: Response, nextF: NextFunction) => {
    const page = parseInt(req.query.page as string);
    const limit = parseInt(req.query.limit as string);

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;
    let next: PaginationType = null;
    let prev: PaginationType = null;

    if (endIndex < (await model.countDocuments().exec()))
      next = {
        limit: limit,
        page: page + 1,
      };
    if (startIndex > 0)
      prev = {
        page: page - 1,
        limit: limit,
      };

    res.paginationInfo = {next, prev, limit, startIndex};
    nextF();
  };
};
