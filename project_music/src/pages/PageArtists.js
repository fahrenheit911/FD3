import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Artist } from "../components/Artist";
import { ee } from "../components/events";
import styled from "styled-components";
import "./Page.scss";

export const PageArtists = () => {
  const [dataApi, setDataApi] = useState([]);
  const [dataDefault, setDataDefault] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const StyleContainer = styled.section`
    display: flex;
    margin: 0 5px;
    flex-grow: 2;
    flex-wrap: wrap;
  `;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(
          "https://6498a3a59543ce0f49e2387d.mockapi.io/artists"
        );
        setDataApi(data.data);
        setDataDefault(data.data);
      } catch (e) {
        setError("Error");
      }
    }
    fetchData();
  }, []);

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
        v.nam.toLowerCase().includes(text.toLowerCase())
      );
    setDataApi(list);
  }, [text]);

  return (
    <div className="Page">
      <StyleContainer>
        {error && <h3>{error}</h3>}
        {dataDefault.length ? (
          <>
            {dataApi.map((artist) => (
              <Artist
                key={artist.id}
                id={artist.id}
                nam={artist.nam}
                genre={artist.genre}
                albums={artist.albums}
                image={artist.image}
              />
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </StyleContainer>
    </div>
  );
};

