export type Direction = "rtl" | "ltr" | "auto" | "none";

export interface SerialType {
  id: number;
  name: string;
  genres: string[];
  image: string;
  summary: string;
  imdb: number;
  ended: string;
}
