export interface Rush {
  _id: string;
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

export type PaginationType = number | null;

export type RushesResult = {
  results: Rush[];
  next: PaginationType;
  prev: PaginationType;
  limit: number;
};

export type PageDirection = "next" | "prev" | "new";
