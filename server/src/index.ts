import "dotenv-safe/config";
import express, { json } from "express";
import cors from 'cors';
import { connect, connection } from "mongoose";
import RushesRouter from "./routes/rushes";

const port = parseInt(process.env.PORT!);

connect(process.env.DATABASE_URL!);
const db = connection;
db.on("error", (error) => console.error(error));
db.on("open", () => console.log("connected to database"));

const app = express();
app.use(json());
app.use(
  cors()
);
// Routes
app.use("/rushes", RushesRouter);

app.listen(port);
