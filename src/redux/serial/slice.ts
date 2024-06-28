import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EpisodeType, FavoriteItem } from "../../types/types";

type InitState = {
  favoriteSerialList?: FavoriteItem[];
  serialEpisodeList: EpisodeType[][];
};

const initialState: InitState = {
  favoriteSerialList: undefined,
  serialEpisodeList: [],
};
const serialSlice = createSlice({
  name: "serial",
  initialState,
  reducers: {
    setFavoriteSerialList: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.favoriteSerialList = action.payload;
    },
    setSerialEpisodeList: (state, action: PayloadAction<EpisodeType[][]>) => {
      state.serialEpisodeList = action.payload;
    },
  },
});
export const { setFavoriteSerialList, setSerialEpisodeList } =
  serialSlice.actions;

export default serialSlice.reducer;
