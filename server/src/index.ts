import express, { Response } from "express";
import { pagination } from "./middleware/pagination";
import { User, UserResult } from "./types";

const app = express();

const users: User[] = [
  {
    id: 1,
    name: "me",
  },
  {
    id: 2,
    name: "me",
  },
  {
    id: 3,
    name: "me",
  },
  {
    id: 4,
    name: "me",
  },
  {
    id: 5,
    name: "me",
  },
  {
    id: 6,
    name: "me",
  },
  {
    id: 7,
    name: "me",
  },
  {
    id: 8,
    name: "me",
  },
  {
    id: 9,
    name: "me",
  },
  {
    id: 10,
    name: "me",
  },
];

app.get("/users", pagination(users), (req, res: Response) => {
  res.json(res.paginatedResults);
});

app.listen(3000);
