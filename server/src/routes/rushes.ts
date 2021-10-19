import { Router, Response, Request } from "express";
import { pagination } from "../middleware/pagination";
import Rush from "../models/Rush";
import { PaginationResult } from "../types";
import { checkForNextPage } from "../utils/checkForNextPage";

const router = Router();

// Get all default data
router.get("/", pagination(Rush), async (_, res: Response) => {
  const { limit, fakeLimit, next, prev, startIndex } = res.paginationInfo;
  const results: PaginationResult = {
    next: next,
    prev: prev,
    results: [],
  };

  try {
    results.results = await Rush.find()
      .limit(fakeLimit)
      .skip(startIndex)
      .exec();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  checkForNextPage(results, limit);
  res.json(results);
});

// Filter by name
router.get("/:name", pagination(Rush), async (req: Request, res: Response) => {
  const name = req.params.name;
  const { limit, fakeLimit, next, prev, startIndex } = res.paginationInfo;
  const results: PaginationResult = {
    next: next,
    prev: prev,
    results: [],
  };

  try {
    results.results = await Rush.find({ $text: { $search: name } })
      .limit(fakeLimit)
      .skip(startIndex)
      .exec();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  checkForNextPage(results, limit);
  res.json(results);
});

// Total Rushing Yards sort

// Longest Rush sort

// Total Rushing Touchdowns sort

export default router;
