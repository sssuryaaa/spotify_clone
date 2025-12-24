import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./PlaylistSlice";
import activePlaylist from "./activePlayist";
import focusTrack from "./focusTrack";
import deviceId from "./deviceId";

const appStore = configureStore({
  reducer: {
    playlist: playlistReducer,
    activePlaylist: activePlaylist,
    focusTrack: focusTrack,
    deviceId: deviceId,
  },
});

export default appStore;
