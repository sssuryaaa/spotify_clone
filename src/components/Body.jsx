import { useSelector } from "react-redux";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const token = localStorage.getItem("access_token");
  const superFocussedTrack = useSelector((store) => store.superFocussedTrack);
  return (
    <div className="flex gap-1 p-3 pt-0 h-3/4">
      <LeftBar />
      <div
        className={`${
          token && superFocussedTrack ? "w-200 " : "w-300"
        } overflow-y-scroll no-scrollbar rounded-sm`}
      >
        <Outlet />
      </div>
      {token && superFocussedTrack && <RightBar />}
    </div>
  );
};

export default Body;
