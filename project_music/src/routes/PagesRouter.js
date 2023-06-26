import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageHome } from "../pages/PageHome";
import { PageAbout } from "../pages/PageAbout";
import { PageArtist } from "../pages/PageArtist";
import { PageArtists } from "../pages/PageArtists";
import { PageSongs } from "../pages/PageSongs";
import { PageYourPlaylist } from "../pages/PageYourPlaylist";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/artists" element={<PageArtists />} />
      <Route path="/artist/:clid" element={<PageArtist />} />
      {/* <Route path="/album/:alid" element={<PageSongs />} /> */}
      <Route path="/yourplaylist" element={<PageYourPlaylist />} />
    </Routes>
  );
};
