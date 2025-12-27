import { loginWithSpotify } from "../auth/spotifyAuth";

export default function LoginButton() {
  return (
    <button
      className="bg-white text-black py-2 px-5 font-bold rounded-full"
      onClick={loginWithSpotify}
    >
      Login
    </button>
  );
}
