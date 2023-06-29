import React from "react";
import { useParams } from "react-router-dom";
import { Songs } from "../components/Songs";
import { appData } from "../appData";

export const PageSongs = () => {
  const params = useParams();

  const albumId = parseInt(params.alid);

  const albumsData = appData.artists.map((c) => c.albums);

  return <div>{}</div>;
};
