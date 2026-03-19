import React from "react";
import { getLoginUrl } from "../../spotify";

function Login() {
  const handleLogin = async () => {
    const url = await getLoginUrl();
    window.location.href = url;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Music Player 🎵</h1>

      <button onClick={handleLogin}>
        Login with Spotify
      </button>
    </div>
  );
}

export default Login;