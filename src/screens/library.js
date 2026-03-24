import React, { useEffect, useState } from "react";
import APIKIT from "../spotify";

export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    console.log("LIBRARY LOADED");

    APIKIT.get("/me/playlists")
      .then((response) => {
        console.log("PLAYLIST DATA:", response.data);

        // ✅ IMPORTANT LINE
        setPlaylists(response.data.items);
      })
      .catch((err) => console.error("ERROR:", err));
  }, []);

  return (
  <div className="screen-container">
    {playlists.length > 0 ? (
      playlists.map((playlist) => (
        <div key={playlist.id}>
          {playlist.name}
        </div>
      ))
    ) : (
      <p>No playlists found</p>
    )}
  </div>
);
}