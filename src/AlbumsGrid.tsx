import { useState, useEffect, useContext } from "react";
import AlbumsList from "./AlbumsList";
import { AlbumContext } from "./AlbumContext";

export default function AlbumsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const { setFetchedAlbums } = useContext(AlbumContext);

  useEffect(() => {
    fetchAlbums();
  }, []);

  async function fetchAlbums() {
    const albums = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
    );
    const json = await albums.json();
    setIsLoading(false);
    setFetchedAlbums(json.feed.entry);
  }
  return (
    <section>{isLoading ? <span>Loading...</span> : <AlbumsList />}</section>
  );
}
