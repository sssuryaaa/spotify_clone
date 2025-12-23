import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Playlist = () => {
  const playlistId = useParams();
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/playlists/" + playlistId.id + "/tracks"
  );
  if (loading)
    return <h1 className="w-200 bg-gray-800 p-5 rounded-sm">Loading...</h1>;
  if (error)
    return <h1 className="w-200 bg-gray-800 p-5 rounded-sm">Error: {error}</h1>;

  const tracks = data.items;
  console.log(tracks);

  return (
    <div className="w-200 bg-gray-800 p-5 rounded-sm">
      <div className="flex justify-between">
        <div># Title</div>
        <div>Album</div>
        <div>Date added</div>
        <div>Duration</div>
      </div>
      {tracks.map((tr, index) => {
        return (
          <div className="flex justify-between" key={tr.track.id}>
            <div>
              {index + 1} {tr.track.name}
            </div>
            <Link to={"/album/" + tr.track.album.id}>
              <div>{tr.track.album.name}</div>
            </Link>
            <div>{tr.added_at.split("T")[0]}</div>
            <div>{tr.track.duration_ms / 60000}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
