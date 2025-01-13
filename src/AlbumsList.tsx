import { useContext, useEffect } from "react";
import Album from "./Album"
import { AlbumContext } from "./AlbumContext";

export interface AlbumId {
    attributes: {[key:string]: string}
    label: string;
}
export interface AlbumsProps {
   id: AlbumId
   image: string
   artistName: string
   albumName: string
}

interface Props {
    albums: AlbumsProps[]
}

export default function AlbumsList() {
    const { fetchedAlbums, searchedAlbums} = useContext(AlbumContext)
    
   let albums;
   searchedAlbums.length === 0 ? albums = fetchedAlbums : albums = searchedAlbums
    return (
        <div className="container">
            { albums.map(album => (
                <Album key={album.id.attributes['im:id']} album={album} />
               ))}
        </div>
    )
}