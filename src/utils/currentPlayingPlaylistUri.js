import { createSlice } from "@reduxjs/toolkit";

const currentPlayingPlaylistUri = createSlice({
  name: "currentPlayingPlaylistUri",
  initialState: null,
  reducers: {
    addCurrentPlayingPlaylistUri: (state, action) => {
      return action.payload;
    },
  },
});

export const { addCurrentPlayingPlaylistUri } =
  currentPlayingPlaylistUri.actions;

export default currentPlayingPlaylistUri.reducer;
