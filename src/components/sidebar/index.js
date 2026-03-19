import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://i.imgur.com/6VBx3io.png"
  );

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    console.log("TOKEN USED:", token);

    if (!token) {
      console.error("NO TOKEN FOUND");
      return;
    }

    fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("STATUS:", res.status);

        if (!res.ok) {
          return res.text().then((text) => {
            console.error("API ERROR:", text);
          });
        }

        return res.json();
      })
      .then((data) => {
        console.log("USER DATA:", data);

        if (data && data.images && data.images.length > 0) {
          setImage(data.images[0].url);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />

      <div className="sidebar-buttons">
      <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
      <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
      <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
      <SidebarButton title="Favorite" to="/favorite" icon={<MdFavorite />} />
      <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>

      <div
        className="btn-body"
        onClick={() => {
          localStorage.removeItem("access_token");
          window.location.reload();
        }}
      >
        <FaSignOutAlt />
        <p className="btn-title">Sign Out</p>
        </div>
    </div>
  );
}