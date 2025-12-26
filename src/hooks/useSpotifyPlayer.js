import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDeviceId } from "../utils/deviceId";

export default function useSpotifyPlayer(token) {
  const playerRef = useRef(null); // ✅ ref, not state
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || playerRef.current) return;

    const interval = setInterval(() => {
      if (!window.Spotify) return;

      clearInterval(interval);

      const player = new window.Spotify.Player({
        name: "My Spotify Web Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      playerRef.current = player;

      player.addListener("ready", ({ device_id }) => {
        dispatch(setDeviceId(device_id));
        setReady(true);
      });

      player.addListener("not_ready", () => {
        setReady(false);
      });

      player.addListener("authentication_error", console.error);
      player.addListener("account_error", console.error);
      player.addListener("playback_error", console.error);

      player.connect();
    }, 300);

    return () => clearInterval(interval);
  }, [token, dispatch]);

  return {
    player: playerRef.current,
  };
}
