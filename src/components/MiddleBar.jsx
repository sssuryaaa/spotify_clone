import React from "react";
import { useSelector } from "react-redux";

const MiddleBar = () => {
  const superFocussedTrack = useSelector((store) => store.superFocussedTrack);
  return (
    <div
      className={`${
        superFocussedTrack ? "w-200" : "w-300"
      } bg-gray-800 p-5 rounded-sm h-dvh`}
    >
      MiddleBar
    </div>
  );
};

export default MiddleBar;
