import { Routes, Route } from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Favorite from "./favorite";
import Player from "./player";
import Trending from "./trending";
import "./home.css";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/player" element={<Player />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}