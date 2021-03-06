export type PaginationType = number | null;

export type PaginationInfo = {
  next: PaginationType;
  prev: PaginationType;
  limit: number;
  fakeLimit: number;
  startIndex: number;
};

export interface Rush {
  Player: string;
  Team: string;
  Pos: string;
  Att: number;
  "Att/G": number;
  Yds: number;
  Avg: number;
  "Yds/G": number;
  TD: number;
  Lng: string;
  "1st": number;
  "1st%": number;
  "20+": number;
  "40+": number;
  FUM: number;
}

export type PaginationResult = {
  results: any[];
  next: PaginationType;
  prev: PaginationType;
  limit: number;
};
