import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteItem } from "../../types/types";

type InitState = {
  favoriteSerialList?: FavoriteItem[];
};

const initialState: InitState = {
  favoriteSerialList: undefined,
};
const serialSlice = createSlice({
  name: "serial",
  initialState,
  reducers: {
    setFavoriteSerialList: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.favoriteSerialList = action.payload;
    },
  },
});
export const { setFavoriteSerialList } = serialSlice.actions;

export default serialSlice.reducer;
