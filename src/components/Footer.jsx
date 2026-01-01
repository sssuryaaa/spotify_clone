import React, { useEffect } from "react";
import useSpotifyPlayer from "../hooks/useSpotifyPlayer";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { addSftInfo } from "../utils/sftInfo";
import FooterTrackCard from "./FooterTrackCard";
import FooterControls from "./FooterControls";
import FooterQueue from "./FooterQueue";
import { addSuperFocussedTrack } from "../utils/superFocussedTrack";

const token = localStorage.getItem("access_token");

const Footer = () => {
  const dispatch = useDispatch();
  const superFocussedTrack = useSelector((store) => store.superFocussedTrack);
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/tracks/" + superFocussedTrack
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  dispatch(addSftInfo(data));

  return (
    <div className="p-3 flex justify-between items-center">
      <FooterTrackCard />
      <FooterControls />
      <FooterQueue />
    </div>
  );
};

export default Footer;
