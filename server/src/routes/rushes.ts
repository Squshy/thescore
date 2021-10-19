import { Router, Response, Request } from "express";
import { pagination } from "../middleware/pagination";
import Rush, { rushSchema } from "../models/Rush";
import { PaginationResult } from "../types";
import { checkForNextPage } from "../utils/checkForNextPage";
import { rushesToCSV } from "../utils/toCSV";

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
router.get(
  "/player/:name",
  pagination(Rush),
  async (req: Request, res: Response) => {
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
  }
);

// Total Rushing Yards sort
router.get(
  "/sort/yards/:sort",
  pagination(Rush),
  async (req: Request, res: Response) => {
    const sort = (req.params.sort = "asc" ? req.params.sort : "desc"); // default descending
    const { limit, fakeLimit, next, prev, startIndex } = res.paginationInfo;
    const results: PaginationResult = {
      next: next,
      prev: prev,
      results: [],
    };

    try {
      results.results = await Rush.find()
        .sort({ Yds: sort })
        .limit(fakeLimit)
        .skip(startIndex)
        .exec();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

    checkForNextPage(results, limit);
    res.json(results);
  }
);

// Longest Rush sort
router.get(
  "/sort/longest/:sort",
  pagination(Rush),
  async (req: Request, res: Response) => {
    const sort = (req.params.sort = "asc" ? req.params.sort : "desc"); // default descending
    const { limit, fakeLimit, next, prev, startIndex } = res.paginationInfo;
    const results: PaginationResult = {
      next: next,
      prev: prev,
      results: [],
    };

    try {
      results.results = await Rush.find()
        .sort({ Lng: sort })
        .collation({ locale: "en_US", numericOrdering: true })
        .limit(fakeLimit)
        .skip(startIndex)
        .exec();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

    checkForNextPage(results, limit);
    res.json(results);
  }
);
// Total Rushing Touchdowns sort
router.get(
  "/sort/touchdowns/:sort",
  pagination(Rush),
  async (req: Request, res: Response) => {
    const sort = (req.params.sort = "asc" ? req.params.sort : "desc"); // default descending
    const { limit, fakeLimit, next, prev, startIndex } = res.paginationInfo;
    const results: PaginationResult = {
      next: next,
      prev: prev,
      results: [],
    };

    try {
      results.results = await Rush.find()
        .sort({ TD: sort })
        .limit(fakeLimit)
        .skip(startIndex)
        .exec();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

    checkForNextPage(results, limit);
    res.json(results);
  }
);

router.get("/csv", async (req: Request, res: Response) => {
  const swag = await Rush.find().lean().limit(10).exec();
  const yes = await rushesToCSV(swag);
  res.set("Content-Type", "text/csv");
  res.attachment('swag.csv')
  return res.send(yes);
  // res.json({ message: "cool" });
});

export default router;
