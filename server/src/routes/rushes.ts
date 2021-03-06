import { Router, Response, Request } from "express";
import { pagination } from "../middleware/pagination";
import { Rush as RushType } from "../types";
import Rush from "../models/Rush";
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
    limit: limit,
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
      limit: limit,
      results: [],
    };

    try {
      results.results = await Rush.find({ $text: { $search: name as string } })
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
      limit: limit,
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
      limit: limit,
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
      limit: limit,
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
  const baseFileName = "nfl-rushing";
  const sort = req.query.sort;
  const direction = req.query.dir === "asc" ? "asc" : "desc";
  const player = req.query.player;
  let sortTypeFileName = "";
  let results: RushType[] = [];
  if (sort) {
    console.log(sort);
    console.log(direction);
    switch (sort) {
      case "touchdowns":
        results = await Rush.find().lean().sort({ TD: direction }).exec();
        sortTypeFileName = "touchdowns";
        break;
      case "longest":
        results = await Rush.find()
          .lean()
          .sort({ Lng: direction })
          .collation({ locale: "en_US", numericOrdering: true })
          .exec();
        sortTypeFileName = "longest";
        break;
      case "yards":
        results = await Rush.find().lean().sort({ Yds: direction }).exec();
        sortTypeFileName = "yards";
        break;
      case "player":
        results = await Rush.find({ $text: { $search: player as string } })
          .lean()
          .exec();
        sortTypeFileName = `player-search-${player as string}`;
        break;
      default:
        results = await Rush.find().lean().exec();
        break;
    }
  } else results = await Rush.find().lean().exec();
  const csvFile = await rushesToCSV(results);
  res.set("Content-Type", "text/csv");
  res.attachment(
    `${baseFileName}${
      sortTypeFileName.length > 0 && "-" + sortTypeFileName
    }.csv`
  );
  return res.send(csvFile);
});

export default router;
