import React, { useState, useEffect } from "react";
import { createStore } from "redux";
import { ee } from "../components/events";
import "./Page.scss";

export const PagePlaylist = () => {
  const [album, setAlbum] = useState([]);

  const defaultState = {
    cash: 0,
  };

  const reducer = (state = defaultState, aktion) => {
    switch (aktion.type) {
      case "ADD_CASH":

      case "GET_CASH":

      default:
        return state;
    }
  };

  // useEffect(() => {
  //   ee.addListener("eeSelectAlbum", (obj) =>
  //     setAlbum((prev) => [...prev, obj])
  //   );
  //   console.log("подписался")

  //   return () => {
  //     ee.removeListener("eeSelectAlbum", (obj) =>
  //       setAlbum((prev) => [...prev, obj])
  //     );
  //     console.log("отписался")
  //   };
  // }, []);

  return <div className="Page">Playlist</div>;
};
