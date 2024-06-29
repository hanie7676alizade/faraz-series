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
export interface EpisodeType {
  id: number;
  name: string;
  image: string;
  imdb: number;
  summary: string;
}

export interface FavoriteItem {
  name: string;
  id: number;
}

export interface SerialEpisodeType {
  episodeList: EpisodeType[][];
  serialId?: number;
  seasonNumber?: number;
}
