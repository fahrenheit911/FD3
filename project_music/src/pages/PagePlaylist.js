import React from "react";
import { useSelector } from "react-redux";
import "./Page.scss";
import "../components/Albums.scss";

export const PagePlaylist = () => {
  console.log("PagePlaylist render");

  const album = useSelector((state) => state.albums);
 
  return (
    <div className="Page">
      <div className="Album">
        <img src={album.img} alt={album.nam}></img>

        <div>
          {album.nam}&#183;{album.year}
        </div>

        <button >Delete</button>
      </div>
    </div>
  );
};
