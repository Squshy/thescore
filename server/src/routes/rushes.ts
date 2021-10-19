import { Router, Response, Request } from "express";
import { pagination } from "../middleware/pagination";
// import { pagination } from '../middleware/pagination';
import Rush from "../models/Rush";
import { PaginationResult } from "../types";
const router = Router();

// Get all default data
router.get("/", pagination(Rush), async (_: Request, res: Response) => {
  const { limit, next, prev, startIndex } = res.paginationInfo;
  const results: PaginationResult = {
    next: next,
    prev: prev,
    results: [],
  };

  try {
    results.results = await Rush.find().limit(limit).skip(startIndex).exec();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.json(results);
});

// Filter by name
router.get("/:name", (_, res: Response) => {});
// Total Rushin Yards sort

// Longest Rush sort

// Total Rushing Touchdowns sort

export default router;
