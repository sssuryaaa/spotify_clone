import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const token = localStorage.getItem("access_token");
  return (
    <div className="flex gap-1 p-3 pt-0 h-3/4">
      <LeftBar />
      <Outlet />
      {token && <RightBar />}
    </div>
  );
};

export default Body;
