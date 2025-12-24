import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDeviceId } from "../utils/deviceId";

export default function useSpotifyPlayer(token) {
  const [player, setPlayer] = useState(null);
  const [deviceId, setLocalDeviceId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    const interval = setInterval(() => {
      if (!window.Spotify) return;

      clearInterval(interval);

      const player = new window.Spotify.Player({
        name: "My Spotify Web Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Spotify Device Ready:", device_id);
        setLocalDeviceId(device_id);
        dispatch(setDeviceId(device_id));
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device offline:", device_id);
      });

      player.addListener("authentication_error", (e) => console.error(e));
      player.addListener("account_error", (e) => console.error(e));
      player.addListener("playback_error", (e) => console.error(e));

      player.connect();
    }, 300);

    return () => clearInterval(interval);
  }, [token]);

  return { player, deviceId };
}
