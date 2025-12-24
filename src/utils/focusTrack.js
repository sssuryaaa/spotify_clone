import { createSlice } from "@reduxjs/toolkit";

const focusTrack = createSlice({
  name: "focusTrack",
  initialState: null,
  reducers: {
    focus: (state, action) => {
      return action.payload;
    },
    deFocus: () => null,
  },
});

export const { focus, deFocus } = focusTrack.actions;

export default focusTrack.reducer;
