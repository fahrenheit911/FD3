import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageHome } from "../pages/PageHome";
import { PageAbout } from "../pages/PageAbout";
import { PageAlbums } from "../pages/PageAlbums";
import { PageArtists } from "../pages/PageArtists";
import { PageYourPlaylist } from "../pages/PageYourPlaylist";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/albums" element={<PageAlbums />} />
      <Route path="/artists" element={<PageArtists />} />
      <Route path="/yourplaylist" element={<PageYourPlaylist />} />
    </Routes>
  );
};
