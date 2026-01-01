import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { activatePlaylist } from "../utils/activePlayist";
import Track from "./Track";

const Playlist = () => {
  const playlistId = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/playlists/" + playlistId.id
  );

  useEffect(() => {
    dispatch(activatePlaylist(playlistId.id));
  }, [playlistId]);

  if (loading)
    return <h1 className="w-200 bg-gray-800 p-5 rounded-sm">Loading...</h1>;
  if (error)
    return <h1 className="w-200 bg-gray-800 p-5 rounded-sm">Error: {error}</h1>;

  const tracks = data.tracks.items;
  const playlstUri = data.uri;

  return (
    <div className=" bg-gray-800 p-5">
      <div className="border border-t-0 border-l-0 border-r-0 flex justify-between p-2 border-b-gray-600 mb-2">
        <div className="w-5/12"># Title</div>
        <div className="w-3/12">Album</div>
        <div className="w-2/12">Date added</div>
        <div className="w-2/12">Duration</div>
      </div>
      {tracks.map((tr, index) => {
        return (
          <Track
            key={tr.track.id}
            tr={tr.track}
            added_at={tr.added_at}
            contextUri={playlstUri}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Playlist;
