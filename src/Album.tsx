import { truncate } from "./utils/truncate"
import { Link } from 'react-router'
import type { AlbumId } from "./AlbumsList"

interface AlbumImage {
    attributes: {[key:string]: string}
    label: string
}

interface ArtistName {
    attributes: {[key:string]: string}
    label: string
}
interface AlbumProps {
    id: AlbumId
    image: AlbumImage[]
    artistName: ArtistName
    albumName: {[key: string]: string}
}

export default function Album(props: AlbumProps) {  
    console.log("p", props)
    const { album } = props
    return (
        <article className="album" >
            <Link to={`albums/${album.id.attributes['im:id']}`}>
            <img src={album['im:image'][2].label} />
            <div className="album-details">
                 <span className="artist-name">{truncate(album['im:artist'].label, 18)}</span>
                 <p className="album-name">{truncate(album['im:name'].label,18)}</p>
            </div>
                </Link>
         </article>
    )
    }