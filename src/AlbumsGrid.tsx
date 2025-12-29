import { useState, useEffect, useContext } from "react";
import AlbumsList from "./AlbumsList";
import { AlbumContext } from "./AlbumContext";
import type { AlbumEntry } from "./types";
import z from "zod";

export default function AlbumsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const { setFetchedAlbums } = useContext(AlbumContext);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const LabelSchema = z.object({
    label: z.string(),
  });

  const ImageSchema = z.object({
    label: z.string(),
    attributes: z.object({
      height: z.string(),
    }),
  });

  const PriceSchema = z.object({
    label: z.string(),
    attributes: z.object({
      amount: z.string(),
      currency: z.string(),
    }),
  });

  async function fetchAlbums() {
    const albums = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
    );
    const json = await albums.json();
    console.log(json);
    setIsLoading(false);
    setFetchedAlbums(json.feed.entry);
  }
  return (
    <section>{isLoading ? <span>Loading...</span> : <AlbumsList />}</section>
  );
}
