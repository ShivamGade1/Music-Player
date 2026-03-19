import React, { useEffect } from "react";
import APIKIT from "../spotify";

export default function Library() {

  useEffect(() => {
    console.log("LIBRARY LOADED"); // debug

    APIKIT.get("/me/playlists") // ✅ IMPORTANT "/" added
      .then((response) => {
        console.log("PLAYLIST DATA:", response.data);
      })
      .catch((err) => console.error("ERROR:", err));
  }, []);

  return <div className="screen-container"></div>;
}