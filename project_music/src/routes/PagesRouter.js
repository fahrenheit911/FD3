import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageArtist } from "../pages/PageArtist";
import { PageArtists } from "../pages/PageArtists";
import { PagePlaylist } from "../pages/PagePlaylist";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageArtists />} />
      <Route path="/artist/:clid" element={<PageArtist />} />
      <Route path="/playlist" element={<PagePlaylist />} />
    </Routes>
  );
};
