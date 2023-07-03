import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { albumsUpd } from "../redux/albumsSlice.js";

import "./Albums.scss";

export const Albums = ({ id, album_img, album_nam, album_year }) => {
  const [isActive, setIsActive] = useState(false);

 const obj = {id, album_img, album_nam, album_year }

  // const dispatch = useDispatch();

  // function selectAlbum() {
  //   dispatch(
  //     albumsUpd({ id: id, img: album_img, nam: album_nam, year: album_year })
  //   );
  //   setIsActive(true);
  // }

  const selectAlbum = () =>{
    axios.post('https://6498a3a59543ce0f49e2387d.mockapi.io/playlist',obj)
    setIsActive(true)
  }

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
