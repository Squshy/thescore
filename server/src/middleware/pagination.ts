import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { PaginationType } from "../types";

export const pagination = (model: Model<any>) => {
  return async (req: Request, res: Response, nextF: NextFunction) => {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 15;

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;
    let next: PaginationType = null;
    let prev: PaginationType = null;
    const numDocuments = await model.countDocuments().exec();

    if (endIndex < numDocuments)
      next = {
        limit: limit,
        page: page + 1,
      };
    if (startIndex > 0)
      prev = {
        page: page - 1,
        limit: limit,
      };

    res.paginationInfo = {
      next,
      prev,
      limit,
      fakeLimit: limit + 1,
      startIndex,
    };
    nextF();
  };
};
