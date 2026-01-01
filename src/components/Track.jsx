import React, { useState } from "react";
import { focus } from "../utils/focusTrack";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";
import useSpotifyControls from "../hooks/useSpotifyControls";

const Track = ({ tr, contextUri, index, added_at }) => {
  const { playTrack, pausePlayback, resumePlayback } = useSpotifyControls();
  const [playIconIndex, setPlayIconIndex] = useState(null);
  const focusTrack = useSelector((store) => store.focusTrack);
  const dispatch = useDispatch();
  const currentPlayingTrack = useSelector((store) => store.currentPlayingTrack);
  const superFocussedTrack = useSelector((store) => store.superFocussedTrack);

  function msToMinSec(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div
      className={`${
        focusTrack === tr.id ? "bg-gray-600" : ""
      } flex justify-between shrink-0 p-2 items-center hover:bg-gray-600 cursor-pointer rounded-sm`}
      key={tr.id}
      onClick={(e) => {
        dispatch(focus(tr.id));
        e.stopPropagation();
      }}
      onMouseEnter={() => setPlayIconIndex(index)}
      onMouseLeave={() => setPlayIconIndex(null)}
    >
      <div className="w-5/12 flex gap-3 items-center ">
        <div
          className={`${superFocussedTrack === tr.id ? "text-green-400" : ""} `}
          onClick={() => {
            if (currentPlayingTrack === tr.id) pausePlayback();
            else if (superFocussedTrack === tr.id) resumePlayback(tr.id);
            else playTrack(tr.uri, contextUri, tr.id);
          }}
        >
          {playIconIndex === index ? (
            currentPlayingTrack === tr.id ? (
              <FaPause size={9} />
            ) : (
              <FaPlay size={9} />
            )
          ) : (
            index + 1
          )}{" "}
        </div>
        <div>
          <img
            className="h-12 w-12 rounded-sm"
            src={tr.album.images[2].url}
            alt=""
          />{" "}
        </div>
        <div className="w-8/12 h-12 overflow-hidden">
          <div
            className={`${
              superFocussedTrack === tr.id ? "text-green-400" : ""
            }`}
          >
            {tr.name}
          </div>
          <div>{tr.artists.map((artist) => artist.name).join(", ")}</div>
        </div>
      </div>
      <Link className="w-3/12 h-5 overflow-hidden" to={"/album/" + tr.album.id}>
        <div>{tr.album.name}</div>
      </Link>
      {added_at && <div className="w-2/12">{added_at.split("T")[0]}</div>}
      <div className="w-2/12">{msToMinSec(tr.duration_ms)}</div>
    </div>
  );
};

export default Track;
