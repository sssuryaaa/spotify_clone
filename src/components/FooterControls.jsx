import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPlayingTrack } from "../utils/currentPlayingTrack";
import useSpotifyControls from "../hooks/useSpotifyControls";
import SeekBar from "./SeekBar";

const FooterControls = () => {
  const superFocussedTrack = useSelector((store) => store.superFocussedTrack);
  const currentPlayingTrack = useSelector((store) => store.currentPlayingTrack);
  const dispatch = useDispatch();
  const sftInfo = useSelector((store) => store.sftInfo);
  const { playTrack, pausePlayback, resumePlayback } = useSpotifyControls();

  return (
    <div className="w-6/12 text-center">
      <div className="flex gap-4 justify-center items-center">
        <MdSkipPrevious size={30} />
        <div
          className="bg-white text-black p-3 rounded-full"
          onClick={() => {
            if (currentPlayingTrack) {
              pausePlayback();
            } else {
              resumePlayback(sftInfo.id);
            }
          }}
        >
          {currentPlayingTrack ? <FaPause /> : <FaPlay />}
        </div>
        <MdSkipNext size={30} />
      </div>
      <div>
        <div>
          <SeekBar />
        </div>
      </div>
    </div>
  );
};

export default FooterControls;
