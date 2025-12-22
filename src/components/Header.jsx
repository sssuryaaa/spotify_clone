import React from "react";
import LoginButton from "./LoginButton";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const token = localStorage.getItem("access_token");
  return (
    <div>
      {!token ? (
        <LoginButton />
      ) : (
        <div className="flex justify-between py-2 px-5">
          <div>
            <img
              className="w-7 h-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
            />
          </div>
          <div>
            <input
              className="w-lg p-3 bg-gray-800 rounded-full"
              type="text"
              placeholder="What do you want to play?"
            />
          </div>
          <div>
            <FaRegUserCircle size={30} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
