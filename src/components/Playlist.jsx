import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { activatePlaylist } from "../utils/activePlayist";
import { focus } from "../utils/focusTrack";
import { FaPlay } from "react-icons/fa";

const Playlist = () => {
  const [playIconIndex, setPlayIconIndex] = useState(null);
  const playlistId = useParams();
  const dispatch = useDispatch();
  const focusTrack = useSelector((store) => store.focusTrack);
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/playlists/" + playlistId.id + "/tracks"
  );

  function msToMinSec(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    dispatch(activatePlaylist(playlistId.id));
  }, [playlistId]);

  if (loading)
    return <h1 className="w-200 bg-gray-800 p-5 rounded-sm">Loading...</h1>;
  if (error)
    return <h1 className="w-200 bg-gray-800 p-5 rounded-sm">Error: {error}</h1>;

  const tracks = data.items;
  console.log(data);

  return (
    <div className="w-200 bg-gray-800 p-5 rounded-sm text-gray-400 overflow-scroll ">
      <div className="border border-t-0 border-l-0 border-r-0 flex justify-between p-2 border-b-gray-600 mb-2">
        <div className="w-5/12"># Title</div>
        <div className="w-3/12">Album</div>
        <div className="w-2/12">Date added</div>
        <div className="w-2/12">Duration</div>
      </div>
      {tracks.map((tr, index) => {
        return (
          <div
            className={`${
              focusTrack === tr.track.id ? "bg-gray-600" : ""
            } flex justify-between shrink-0 p-2 items-center hover:bg-gray-600 cursor-pointer rounded-sm`}
            key={tr.track.id}
            onClick={(e) => {
              dispatch(focus(tr.track.id));
              e.stopPropagation();
            }}
            onMouseEnter={() => setPlayIconIndex(index)}
            onMouseLeave={() => setPlayIconIndex(null)}
          >
            <div className="w-5/12 flex gap-3 items-center ">
              <div>
                {playIconIndex === index ? <FaPlay size={9} /> : index + 1}{" "}
              </div>
              <div>
                <img
                  className="h-12 w-12 rounded-sm"
                  src={tr.track.album.images[2].url}
                  alt=""
                />{" "}
              </div>
              <div className="w-8/12 h-12 overflow-hidden">
                <div>{tr.track.name}</div>
                <div>
                  {tr.track.artists.map((artist) => artist.name).join(", ")}
                </div>
              </div>
            </div>
            <Link
              className="w-3/12 h-5 overflow-hidden"
              to={"/album/" + tr.track.album.id}
            >
              <div>{tr.track.album.name}</div>
            </Link>
            <div className="w-2/12">{tr.added_at.split("T")[0]}</div>
            <div className="w-2/12">{msToMinSec(tr.track.duration_ms)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
