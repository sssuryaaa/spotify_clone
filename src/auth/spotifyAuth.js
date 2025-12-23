const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://127.0.0.1:5173/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
import { generateCodeVerifier, generateCodeChallenge } from "./pkce";

const SCOPES = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "streaming",
  "user-read-playback-state",
  "user-modify-playback-state",
].join(" ");

export async function loginWithSpotify() {
  let codeVerifier = localStorage.getItem("code_verifier");

  if (!codeVerifier) {
    codeVerifier = generateCodeVerifier();
    localStorage.setItem("code_verifier", codeVerifier);
  }

  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  });

  window.location.href = `${AUTH_ENDPOINT}?${params.toString()}`;
}
