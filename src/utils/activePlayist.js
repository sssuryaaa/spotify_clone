import { createSlice } from "@reduxjs/toolkit";

const activePlaylist = createSlice({
  name: "activePlaylist",
  initialState: null,
  reducers: {
    activatePlaylist: (state, action) => {
      return action.payload;
    },
    noActivePlaylist: (state, action) => {
      return null;
    },
  },
});

export const { activatePlaylist, noActivePlaylist } = activePlaylist.actions;

export default activePlaylist.reducer;
