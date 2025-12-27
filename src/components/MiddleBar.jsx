import React from "react";

const MiddleBar = () => {
  const token = localStorage.getItem("access_token");
  return (
    <div
      className={`${token ? "min-w-200" : "w-300"} bg-gray-800 p-5 rounded-sm`}
    >
      MiddleBar
    </div>
  );
};

export default MiddleBar;
