import { loginWithSpotify } from "../auth/spotifyAuth";

export default function LoginButton() {
  return <button onClick={loginWithSpotify}>Login with Spotify</button>;
}
