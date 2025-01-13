import { useContext } from "react";
import Album from "./Album"
import { AlbumContext } from "./AlbumContext";

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