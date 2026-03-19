const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "bec5e0ed16c443f98b3e416e6fe8ab21";

const redirectUri = "https://plumbeous-chanell-eclectically.ngrok-free.dev";

const scopes = [
  "user-library-read",
  "playlist-read-private"
];

export const loginEndpoint =
`${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&show_dialog=true&scope=${scopes.join(" ")}`;