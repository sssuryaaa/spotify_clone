import { createSlice } from "@reduxjs/toolkit";

const currentPlayingTrack = createSlice({
  name: "currentPlayingTrack",
  initialState: null,
  reducers: {
    addCurrentPlayingTrack: (state, action) => {
      return action.payload;
    },
  },
});

export const { addCurrentPlayingTrack } = currentPlayingTrack.actions;

export default currentPlayingTrack.reducer;
