import { useDispatch, useSelector } from "react-redux";
import { addCurrentPlayingTrack } from "../utils/currentPlayingTrack";
import { addSuperFocussedTrack } from "../utils/superFocussedTrack";
import { useContext } from "react";
import playerContext from "../utils/playerContext";

export default function useSpotifyControls() {
  //   const token = useSelector((store) => store.token);
  const token = localStorage.getItem("access_token");
  const deviceId = useSelector((store) => store.deviceId);
  const dispatch = useDispatch();
  const { player } = useContext(playerContext);

  const playTrack = async (trackUri, contextUri, trackId) => {
    if (!token || !deviceId) return;

    try {
      const res = await fetch(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            contextUri
              ? {
                  context_uri: contextUri,
                  offset: { uri: trackUri },
                }
              : {
                  uris: [trackUri],
                }
          ),
        }
      );
      if (!res.ok) {
        throw new Error(res.status + " : " + res.statusText);
      }
      dispatch(addCurrentPlayingTrack(trackId));
      dispatch(addSuperFocussedTrack(trackId));
    } catch (err) {
      console.log(err.message);
    }
  };

  const pausePlayback = async () => {
    if (!token || !deviceId) return;

    try {
      const res = await fetch(
        `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(res.status + " : " + res.statusText);
      }
      dispatch(addCurrentPlayingTrack(null));
    } catch (err) {
      console.log(err.message);
    }
  };

  const resumePlayback = (trackId) => {
    if (!player) return;
    player.resume();
    dispatch(addCurrentPlayingTrack(trackId));
  };

  return { playTrack, pausePlayback, resumePlayback };
}
