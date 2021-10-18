export type User = { id: number; name: string };
export type UserResult = {
  results: User[];
  next: { page: number; limit: number } | null;
  prev: { page: number; limit: number } | null;
};
