import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylist } from "../utils/PlaylistSlice";
import { Link } from "react-router-dom";
import { activatePlaylist } from "../utils/activePlayist";

const LeftBar = () => {
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/me/playlists"
  );
  const activePlaylist = useSelector((store) => store.activePlaylist);
  const slice = useSelector((store) => store.playlist.items);
  const currentPlayingPlaylistUri = useSelector(
    (store) => store.currentPlayingPlaylistUri
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(addPlaylist(data));
  }, [data]);

  if (loading || slice.length === 0)
    return <h1 className="w-100 bg-gray-800 p-5 rounded-sm">Loading...</h1>;
  if (error)
    return <h1 className="w-100 bg-gray-800 p-5 rounded-sm">{error}</h1>;

  const playlists = slice[0].items;

  return (
    <div className="w-100 bg-gray-800 p-5 rounded-sm">
      <h1>Your Library</h1>
      <div className="p-2">
        {playlists.map((playlist) => {
          return (
            <Link key={playlist.id} to={"/playlist/" + playlist.id}>
              <div
                className={`flex gap-2 cursor-pointer ${
                  activePlaylist === playlist.id ? "bg-gray-600" : ""
                } hover:bg-gray-600 p-2 rounded-sm`}
                onClick={() => dispatch(activatePlaylist(playlist.id))}
              >
                <div>
                  <img src={playlist.images[0].url} className="h-12 w-12" />
                </div>
                <div className="w-8/12">
                  <div
                    className={`h-6 overflow-hidden ${
                      currentPlayingPlaylistUri === playlist.uri
                        ? "text-green-400"
                        : ""
                    } `}
                  >
                    {playlist.name}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 ">
                    <div>playlist</div> <GoDotFill size={10} />
                    {playlist.owner.display_name}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftBar;
