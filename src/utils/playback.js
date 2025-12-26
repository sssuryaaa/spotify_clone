import { createSlice } from "@reduxjs/toolkit";

const playback = createSlice({
  name: "playback",
  initialState: {
    isPlaying: false,
    position: 0,
    duration: 0,
    currentTrackId: null,
  },
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrackId = action.payload;
    },
  },
});

export const { setIsPlaying, setPosition, setDuration, setCurrentTrack } =
  playback.actions;

export default playback.reducer;
