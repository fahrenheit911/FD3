import React, { useState, useEffect } from "react";
import { ee } from "../components/events";
import "./Page.scss";

export const PageYourPlaylist = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    ee.addListener("eeSelectAlbum", (arr) =>
      setAlbum((prev) => [...prev, arr])
    );

    return () => {
      ee.removeListener("eeSelectAlbum", (arr) => setAlbum(arr));
    };
  });

  console.log(album)

  return <div className="Page">{album}</div>;
};
