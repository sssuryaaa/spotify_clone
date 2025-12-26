import { createContext } from "react";

const playerContext = createContext({
  spotifyPlayer: null,
});

export default playerContext;
