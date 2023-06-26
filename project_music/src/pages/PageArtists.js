import React, { useState, useEffect } from "react";
import { appData } from "../appData";
import { Artists } from "../components/Artists";
import { ee } from "../components/events";
import "./Page.scss";

export const PageArtists = () => {
  const [data, setData] = useState(appData.artists);
  const [text, setText] = useState("");

  useEffect(() => {
    ee.addListener("eefilterArtists", (text) => setText(text));
    return () => {
      ee.removeListener("eefilterArtists", (text) => setText(text));
    };
  });

  useEffect(() => {
    let list = appData.artists;
    if (text)
      list = list.filter((v) =>
        v.nam.toLowerCase().includes(text.toLowerCase())
      );
    setData(list);
  }, [text]);

  return (
    <div className="Page">
      <Artists artists={data} />
    </div>
  );
};
