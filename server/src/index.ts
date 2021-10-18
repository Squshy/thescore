import express, { Response } from "express";
import { pagination } from "./middleware/pagination";
import { connect } from "mongoose";
import Rush from "./models/Rush";
import "dotenv-safe/config";

const port = parseInt(process.env.PORT!);

connect(process.env.DATABASE_URL!);

const app = express();

app.get("/rushes", pagination(Rush), (_, res: Response) => {
  res.json(res.paginatedResults);
});

app.listen(port);
