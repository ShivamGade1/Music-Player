const clientId = "bec5e0ed16c443f98b3e416e6fe8ab21";
const redirectUri = "https://music-player-zeta-liard-95.vercel.app/";

const authEndpoint = "https://accounts.spotify.com/authorize";

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-top-read",
  "playlist-read-private",
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

// ✅ FIX: persistent code verifier
const getCodeVerifier = () => {
  let verifier = localStorage.getItem("code_verifier");

  if (!verifier) {
    verifier = generateRandomString(128);
    localStorage.setItem("code_verifier", verifier);
  }

  return verifier;
};

const generateCodeChallenge = async (verifier) => {
  const data = new TextEncoder().encode(verifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

// 🔐 LOGIN URL
export const getLoginUrl = async () => {
  const verifier = getCodeVerifier(); // ✅ FIX
  const codeChallenge = await generateCodeChallenge(verifier);

  return `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&code_challenge_method=S256&code_challenge=${codeChallenge}&scope=${scopes.join(
    "%20"
  )}`;
};

// 🎧 TOKEN EXCHANGE
export const getToken = async (code) => {
  const verifier = localStorage.getItem("code_verifier");

  const body = new URLSearchParams({
    client_id: clientId,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    code_verifier: verifier,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  const data = await response.json();
  return data;
};