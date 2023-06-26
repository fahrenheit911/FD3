import React from "react";
import styled from "styled-components";
import { Artist } from "./Artist";


export const Artists = ({ artists }) => {
  const StyleContainer = styled.section`
  display: flex;
  margin: 0 5px;
  flex-grow: 2;
  flex-wrap: wrap;
  `;
  const artistsCode = artists.map((artist) => (
    <Artist
      key={artist.id}
      id={artist.id}
      nam={artist.nam}
      genre={artist.genre}
      albums={artist.albums}
      image={artist.image}
    />
  ));

  return <StyleContainer>{artistsCode}</StyleContainer>;
};
