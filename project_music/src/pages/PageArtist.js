import React from "react";
import { useParams } from "react-router-dom";
import { Albums } from "../components/Albums";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./Page.scss";

const queryClient = new QueryClient();

export const PageArtist = () => (
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

const Example = () => {
  const params = useParams();

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://6498a3a59543ce0f49e2387d.mockapi.io/artists").then(
      (response) => response.json()
    )
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const artistId = parseInt(params.clid);

  const artistData = data.find((c) => parseInt(c.id) === artistId);

  const albumsCode = artistData.albums.map((album) => (
    <Albums
      key={album.id}
      id={album.id}
      album_img={album.album_img}
      album_nam={album.album_nam}
      album_year={album.album_year}
    />
  ));

  return <div className="Page">{albumsCode}</div>;
};
