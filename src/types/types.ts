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

export interface SeasonType {
  id: number;
  totalEpisode: number;
  image: string;
  ended: string;
}
