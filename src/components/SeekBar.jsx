import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import playerContext from "../utils/playerContext";

const SeekBar = () => {
  const { position, duration, isPlaying } = useSelector(
    (store) => store.playback
  );
  const { player } = useContext(playerContext);
  const [localPosition, setLocalPosition] = useState(position);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  function msToMinSec(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    setLocalPosition(position);
  }, [position]);

  useEffect(() => {
    if (!isPlaying) return;

    const tick = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      setLocalPosition((p) => Math.min(p + delta, duration));

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [duration, isPlaying]);

  const handleSeek = (e) => {
    const percent = Number(e.target.value);
    const seekTo = (percent / 100) * duration;

    player.seek(seekTo);
  };

  const val = duration ? Math.floor((localPosition / duration) * 100) : 0;

  return (
    <div>
      <span>{msToMinSec(position)}</span>
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={handleSeek}
      ></input>
      <span>{msToMinSec(duration)}</span>
    </div>
  );
};

export default SeekBar;
