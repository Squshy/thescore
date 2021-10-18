type PaginationType = { page: number; limit: number } | null;

export type Rush = {
  player: string;
  team: string;
  pos: string;
  rush_attempts: number;
  rush_attempts_per_game: number;
  total_yards: number;
  avg_yards: number;
  yards_per_game: number;
  touchdowns: number;
  longest_rush: string;
  first_downs: number;
  first_down_percent: number;
  yards_rush_20: number;
  yards_rush_40: number;
  fumbles: number;
};

export type RushResult = {
  results: Rush[];
  next: PaginationType;
  prev: PaginationType;
};
