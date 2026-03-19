const authEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";

const clientId = "bec5e0ed16c443f98b3e416e6fe8ab21";
const redirectUri = "https://music-player1-roan.vercel.app/";

const scopes = [
  "user-library-read",
  "playlist-read-private"
];

// 🔐 Generate random string
function generateRandomString(length) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(crypto.getRandomValues(new Uint8Array(length)))
    .map((x) => possible[x % possible.length])
    .join("");
}

// 🔐 Generate code challenge
async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// 🚀 Login URL
export const getLoginUrl = async () => {
  const codeVerifier = generateRandomString(128);
  localStorage.setItem("code_verifier", codeVerifier);

  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    scope: scopes.join(" "),
    show_dialog: "true",
  });

  return `${authEndpoint}?${params.toString()}`;
};

// 🔄 Get token
export const getToken = async (code) => {
  const codeVerifier = localStorage.getItem("code_verifier");

  const body = new URLSearchParams({
    client_id: clientId,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  });

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  return await response.json();
};