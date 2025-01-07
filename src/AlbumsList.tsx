import Albumz from "./Albumz"
import type { Album } from "./AlbumDetailsPage"

interface Props {
    albums: Album[]
}

export default function AlbumsList(props:Props) {
    const {albums} = props;
    console.log("A", albums)
    return (
        <div className="container">
            { albums.map(album => (
                <Albumz key={album.id.attributes['im:id']} album={album} />
               ))}
        </div>
    )
}