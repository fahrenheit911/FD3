import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Albums } from "../components/Albums";
import { appData } from "../appData";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./Page.scss";

const queryClient = new QueryClient();

export const PageArtist = () => (
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

function Example() {
  const params = useParams();
  const [dataApi, setDataApi] = useState([]);

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://6498a3a59543ce0f49e2387d.mockapi.io/artists")
      .then((response) => response.json())
      .then((json) => {
        setDataApi(json);
      })
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const artistId = parseInt(params.clid);

  const artistData = dataApi.find((c) => c.id === artistId);

  console.log(artistData);

  // const albumsCode = artistData.albums.map((album) => (
  //   <Albums
  //     key={album.id}
  //     id={album.id}
  //     album_img={album.album_img}
  //     album_nam={album.album_nam}
  //     album_year={album.album_year}
  //   />
  // ));

  return (
    <div>
      <h1>{artistData}</h1>
    </div>
  );
}

//return <div className="Page">{albumsCode}</div>;
