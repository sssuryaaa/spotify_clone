import { createSlice } from "@reduxjs/toolkit";

const superFocussedTrack = createSlice({
  name: "superFocussedTrack",
  initialState: null,
  reducers: {
    addSuperFocussedTrack: (state, action) => {
      return action.payload;
    },
  },
});

export const { addSuperFocussedTrack } = superFocussedTrack.actions;

export default superFocussedTrack.reducer;
