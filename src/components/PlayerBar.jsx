import useSpotifyPlayer from "../hooks/useSpotifyPlayer";

const token = localStorage.getItem("access_token");

const PlayerBar = () => {
  const { player, deviceId } = useSpotifyPlayer(token);

  const playTrack = () => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: ["spotify:track:4cOdK2wGLETKBW3PvgPWqT"],
      }),
    });
  };

  if (!deviceId) return <p>Connecting to Spotify...</p>;

  return (
    <div className="p-4">
      <button onClick={playTrack} className="bg-green-500 px-4 py-2 rounded">
        ▶ Play
      </button>
    </div>
  );
};

export default PlayerBar;
