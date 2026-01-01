import React, { useEffect } from "react";
import useSpotifyPlayer from "../hooks/useSpotifyPlayer";
import playerContext from "../utils/playerContext";
import { useDispatch } from "react-redux";
import {
  setCurrentTrack,
  setDuration,
  setIsPlaying,
  setPosition,
} from "../utils/playback";
import { addCurrentPlayingTrack } from "../utils/currentPlayingTrack";
import { addSuperFocussedTrack } from "../utils/superFocussedTrack";
import { addCurrentPlayingPlaylistUri } from "../utils/currentPlayingPlaylistUri";

const token = localStorage.getItem("access_token");

const SpotifyPlayerProvider = ({ children }) => {
  const { player } = useSpotifyPlayer(token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (player) {
      player.addListener("player_state_changed", (state) => {
        if (!state) return;

        const currentTrack = state.track_window.current_track;
        const contextUri = state.context?.uri || null;

        dispatch(setIsPlaying(!state.paused));
        dispatch(setPosition(state.position));
        dispatch(setDuration(state.duration));
        dispatch(setCurrentTrack(state.track_window.current_track.id));
        if (state.paused) dispatch(addCurrentPlayingTrack(null));
        else dispatch(addCurrentPlayingTrack(currentTrack.id));
        dispatch(addSuperFocussedTrack(currentTrack.id));
        dispatch(addCurrentPlayingPlaylistUri(contextUri));
      });
    }
  }, [player, dispatch]);

  return (
    <playerContext.Provider value={{ player }}>
      {children}
    </playerContext.Provider>
  );
};

export default SpotifyPlayerProvider;
