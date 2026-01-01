import React from "react";
import { useSelector } from "react-redux";

const FooterTrackCard = () => {
  const sftInfo = useSelector((store) => store.sftInfo);
  return (
    <div className="flex items-center gap-4 w-3/12">
      <div>
        <img src={sftInfo.album.images[2].url} alt="" />
      </div>
      <div>
        <div>{sftInfo.name}</div>
        <div>{sftInfo.artists[0].name}</div>
      </div>
    </div>
  );
};

export default FooterTrackCard;
