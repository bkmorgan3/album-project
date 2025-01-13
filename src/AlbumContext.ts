import { createContext } from "react";
import type { AlbumContextType } from "./@types/album";
import { selectedAlbum, searchedAlbums, fetchedAlbums } from "./lib/initialState"

export const AlbumContext = createContext<AlbumContextType>(selectedAlbum, fetchedAlbums, searchedAlbums);
