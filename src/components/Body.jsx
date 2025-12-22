import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MiddleBar from "./MiddleBar";

const Body = () => {
  return (
    <div className="flex gap-1 p-3 h-3/4">
      <LeftBar />
      <MiddleBar />
      <RightBar />
    </div>
  );
};

export default Body;
