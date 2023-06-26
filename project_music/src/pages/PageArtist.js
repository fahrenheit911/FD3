import React from "react";
import { useParams } from "react-router-dom";
import { Albums } from "../components/Albums";
import { appData } from "../appData";
import "./Page.scss";

export const PageArtist = () => {
  const params = useParams();

  const artistId = parseInt(params.clid);

  const artistData = appData.artists.find((c) => c.id === artistId);  

  const albumsCode = artistData.albums.map((album) => (
    
    <Albums
      key={album.id}
      id={album.id}
      album_img={album.album_img}
      album_nam={album.album_nam}
      album_year={album.album_year}
      qty_song={album.qty_song}
    />
    
  ));
  
  return <div className="Page">{albumsCode}</div>;
};
