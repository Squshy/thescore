import { UserResult } from "./types";

declare module 'express-serve-static-core' {
  interface Response {
    paginatedResults: UserResult
  }
}