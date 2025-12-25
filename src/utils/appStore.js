import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./PlaylistSlice";
import activePlaylist from "./activePlayist";
import focusTrack from "./focusTrack";
import deviceId from "./deviceId";
import currentPlayingTrack from "./currentPlayingTrack";
import superFocussedTrack from "./superFocussedTrack";
import sftInfo from "./sftInfo";

const appStore = configureStore({
  reducer: {
    playlist: playlistReducer,
    activePlaylist: activePlaylist,
    focusTrack: focusTrack,
    deviceId: deviceId,
    currentPlayingTrack: currentPlayingTrack,
    superFocussedTrack: superFocussedTrack,
    sftInfo: sftInfo,
  },
});

export default appStore;
