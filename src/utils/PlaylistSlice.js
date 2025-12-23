import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    items: [],
  },
  reducers: {
    addPlaylist: (state, action) => {
      state.items.push(action.payload);
    },
    removePlaylist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPlaylist, removePlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
