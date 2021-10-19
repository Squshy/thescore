import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { Rush, RushResult } from "../types";

export const pagination = (model: Model<Rush>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string);
    const limit = parseInt(req.query.limit as string);

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;

    const results: RushResult = {
      results: [],
      next: null,
      prev: null,
    };

    if (endIndex < (await model.countDocuments().exec()))
      results.next = {
        limit: limit,
        page: page + 1,
      };
    if (startIndex > 0)
      results.prev = {
        page: page - 1,
        limit: limit,
      };

    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    res.paginatedResults = results;
    next();
  };
};
