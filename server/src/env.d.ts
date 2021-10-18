import { RushResult } from "./types";

declare module "express-serve-static-core" {
  interface Response {
    paginatedResults: RushResult;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    PORT: string;
  }
}
