import React from "react";
import { useDispatch, useSelector } from "react-redux";

const RightBar = () => {
  const sftInfo = useSelector((store) => store.sftInfo);
  console.log(sftInfo);
  if (!sftInfo)
    return (
      <div className="w-100 bg-gray-800 p-5 rounded-sm">
        <div className="font-bold text-green-400 p-2">Spotify Preview</div>
        <div>
          <img
            className="rounded-sm"
            src="https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg"
          />
        </div>
      </div>
    );
  const { name, primary_color } = sftInfo;
  const artistName = sftInfo.artists[0].name;
  const img_url = sftInfo.album.images[0].url;
  return (
    <div className="w-100 bg-gray-800 p-5 rounded-sm">
      <div className="font-bold text-green-400 p-2">{name}</div>
      <div>
        <img src={img_url} className="rounded-xl p-2" />
      </div>
      <div className="text-2xl hover:underline px-2">{name}</div>
      <div className="px-2 text-gray-400 hover:underline">{artistName}</div>
    </div>
  );
};

export default RightBar;
