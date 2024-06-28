import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SerialType } from "../../types/types";

type InitState = {
  serial?: SerialType;
};

const initialState: InitState = {
  serial: undefined,
};
const serialSlice = createSlice({
  name: "serial",
  initialState,
  reducers: {
    setSerial: (state, action: PayloadAction<SerialType>) => {
      state.serial = action.payload;
    },
  },
});
export const { setSerial } = serialSlice.actions;

export default serialSlice.reducer;
