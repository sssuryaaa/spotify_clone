import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MiddleBar from "./MiddleBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-1 p-3 h-3/4">
      <LeftBar />
      <Outlet />
      <RightBar />
    </div>
  );
};

export default Body;
