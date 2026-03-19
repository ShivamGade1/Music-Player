import React, { useState } from "react";
import { getLoginUrl } from "../../spotify";
import "./login.css";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const url = await getLoginUrl();
      window.location.href = url;
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify logo"
        className="logo"
      />

      <div className="login-btn" onClick={handleLogin}>
        {loading ? "LOADING..." : "LOG IN"}
      </div>
    </div>
  );
}