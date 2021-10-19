import { Model } from "mongoose";
import { PaginationType } from "../types";

export const getPaginationValues = async (
  model: Model<any>,
  prePage: string | undefined,
  preLimit: string | undefined
) => {
  const page = prePage ? parseInt(prePage) : 0;
  const limit = preLimit ? parseInt(preLimit) : 15;

  const startIndex: number = (page - 1) * limit;
  const endIndex: number = page * limit;

  var next: PaginationType = null;
  var prev: PaginationType = null;

  if (endIndex < (await model.countDocuments().exec())) {
    next = {
      limit: limit,
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    prev = {
      page: page - 1,
      limit: limit,
    };
  }

  return { next, prev, limit, startIndex };
};
