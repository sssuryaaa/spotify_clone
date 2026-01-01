import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Track from "./Track";

const SearchResults = () => {
  const { text } = useParams();
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/search?q=" + text + "&type=track"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const tracks = data.tracks.items;

  return (
    <div className=" bg-gray-800 p-5 ">
      {tracks.map((tr, index) => {
        return (
          <Track key={tr.id} tr={tr} contextUri={tr.album.uri} index={index} />
        );
      })}
    </div>
  );
};

export default SearchResults;
