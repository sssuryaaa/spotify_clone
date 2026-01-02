import React from "react";
import { useSelector } from "react-redux";

const MiddleBar = () => {
  const superFocussedTrack = useSelector((store) => store.superFocussedTrack);
  return <div className={` bg-gray-800 p-5 rounded-sm`}>MiddleBar</div>;
};

export default MiddleBar;
