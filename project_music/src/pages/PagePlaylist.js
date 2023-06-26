import React, { useState, useEffect } from "react";
import { ee } from "../components/events";
import "./Page.scss";

export const PagePlaylist = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    ee.addListener("eeSelectAlbum", (obj) => setAlbum((prev) => [...prev, obj]))

    return () => {
      ee.removeListener("eeSelectAlbum", (obj) =>
        setAlbum((prev) => [...prev, obj])
      );
    };
  }, []);

  console.log(album)

  return <div className="Page">{album}</div>;
};
