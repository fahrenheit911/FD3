import React, { useState, useEffect, Fragment } from "react";
import { ee } from "../components/events";
import axios from "axios";
import "./PagePlaylist.scss";
import "../components/Albums.scss";

export const PagePlaylist = () => {
  console.log("PagePlaylist render");

  const [dataAlbums, setDataAlbums] = useState([]);
  const [dataDefault, setDataDefault] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(
          "https://6498a3a59543ce0f49e2387d.mockapi.io/playlist"
        );
        console.log(data.data);
        setDataAlbums(data.data);
        setDataDefault(data.data);
      } catch (e) {
        setError("Error");
      }
    }
    fetchData();
  }, []);

  const deleteAlbum = (id) => {
    axios.delete(`https://6498a3a59543ce0f49e2387d.mockapi.io/playlist/${id}`);
    setDataAlbums((prev) => prev.filter((album) => album.id !== id));
  };

  useEffect(() => {
    ee.addListener("eefilterArtists", (text) => setText(text));
    return () => {
      ee.removeListener("eefilterArtists", (text) => setText(text));
    };
  });

  useEffect(() => {
    let list = dataDefault;
    if (text)
      list = list.filter((v) =>
        v.album_nam.toLowerCase().includes(text.toLowerCase())
      );
    setDataAlbums(list);
  }, [text]);

  return (
    <div className="PagePlaylist">
      {error && <h3>{error}</h3>}
      {dataAlbums.length ? (
        <>
          {dataAlbums.map((album) => (
            <div className="PlaylistAlbum" key={album.id}>
              <img src={album.album_img} alt={album.album_nam}></img>
              <div>{album.album_nam}</div>
              <div>{album.album_year}</div>
              <button onClick={() => deleteAlbum(album.id)}>Delete</button>
            </div>
          ))}
        </>
      ) : (
        <div className="IconContainer">
          <div className="Icon">
            <img src="./icons/playlist.png" width={300} alt="playlist"></img>
            <h2>Your Playlist Is Empty</h2>
          </div>
        </div>
      )}
    </div>
  );
};
