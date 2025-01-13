import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import App from "./App";
import AlbumDetails from "./AlbumDetails";
import { AlbumContext } from "./AlbumContext";

export default function Wrapper() {
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [fetchedAlbums, setFetchedAlbums] = useState([]);
  const [searchedAlbums, setSearchedAlbums] = useState([]);

  return (
    <BrowserRouter>
      <AlbumContext.Provider
        value={{
          selectedAlbum,
          setSelectedAlbum,
          fetchedAlbums,
          setFetchedAlbums,
          searchedAlbums,
          setSearchedAlbums,
        }}
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
        </Routes>
      </AlbumContext.Provider>
    </BrowserRouter>
  );
}
