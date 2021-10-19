import { Router, Response, Request } from "express";
import { pagination } from "../middleware/pagination";
import Rush from "../models/Rush";
import { PaginationResult } from "../types";

const router = Router();

// Get all default data
router.get("/", pagination(Rush), async (_, res: Response) => {
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

  if (results.results.length <= limit) results.next = null;
  res.json(results);
});

// Filter by name
router.get("/:name", pagination(Rush), async (req: Request, res: Response) => {
  const name = req.params.name;
  const { limit, next, prev, startIndex } = res.paginationInfo;
  const results: PaginationResult = {
    next: next,
    prev: prev,
    results: [],
  };

  try {
    results.results = await Rush.find({ $text: { $search: name } })
      .limit(limit)
      .skip(startIndex)
      .exec();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  if (results.results.length <= limit) results.next = null;
  res.json(results);
});

// Total Rushin Yards sort

// Longest Rush sort

// Total Rushing Touchdowns sort

export default router;
