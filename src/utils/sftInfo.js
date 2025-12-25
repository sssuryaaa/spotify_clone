import { createSlice } from "@reduxjs/toolkit";

const sftInfo = createSlice({
  name: "sftInfo",
  initialState: null,
  reducers: {
    addSftInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { addSftInfo } = sftInfo.actions;

export default sftInfo.reducer;
