import React, { useState, useEffect } from "react";
import { ee } from "./events";
import "./Albums.scss";

export const Albums = ( {id, album_img, album_nam, album_year} ) => {

  const [isActive, setIsActive] = useState(false);

  const selectAlbum = (eo) => {
    ee.emit("eeSelectAlbum", { id, album_img, album_nam, album_year });
    setIsActive(true);
  };

  return (
    <div className="Album">
      <img src={album_img} alt={album_nam}></img>

      <div>
        {album_nam}&#183;{album_year}
      </div>

      <button onClick={selectAlbum}>
        {isActive ? "Added" : "Add to playlist"}
      </button>
    </div>
  );
};
