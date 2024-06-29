import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteItem, SerialEpisodeType } from "../../types/types";

type InitState = {
  favoriteSerialList?: FavoriteItem[];
  serialEpisode: SerialEpisodeType;
};

const initialState: InitState = {
  favoriteSerialList: undefined,
  serialEpisode: {
    episodeList: [],
    serialId: undefined,
    seasonNumber: undefined,
  },
};
const serialSlice = createSlice({
  name: "serial",
  initialState,
  reducers: {
    setFavoriteSerialList: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.favoriteSerialList = action.payload;
    },
    setSerialEpisode: (state, action: PayloadAction<SerialEpisodeType>) => {
      state.serialEpisode = action.payload;
    },
  },
});
export const { setFavoriteSerialList, setSerialEpisode } = serialSlice.actions;

export default serialSlice.reducer;
