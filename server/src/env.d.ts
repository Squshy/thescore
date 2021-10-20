import { PaginationInfo, PaginationType, RushResult } from "./types";

declare module "express-serve-static-core" {
  interface Response {
    paginationInfo: PaginationInfo;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    PORT: string;
    CORS_ORIGIN: string;
  }
}
