import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./PlaylistSlice";

const appStore = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});

export default appStore;
