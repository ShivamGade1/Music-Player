const clientId = "bec5e0ed16c443f98b3e416e6fe8ab21";
const redirectUri = "https://music-player-zeta-liard-95.vercel.app/";

const authEndpoint = "https://accounts.spotify.com/authorize";

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-top-read",
  "playlist-read-private"
];

// PKCE helper
const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const codeVerifier = generateRandomString(128);

const generateCodeChallenge = async (codeVerifier) => {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

export const getLoginUrl = async () => {
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  localStorage.setItem("code_verifier", codeVerifier);

  return `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&code_challenge_method=S256&code_challenge=${codeChallenge}&scope=${scopes.join(
    "%20"
  )}`;
};