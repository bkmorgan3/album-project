import { truncate } from "./utils/truncate"
import { Link } from 'react-router'


export default function Album({album}) {    
    return (
        <article className="album" >
            <img src={album['im:image'][2].label} />
            <div className="album-details">
                 <span className="artist-name">{truncate(album['im:artist'].label, 18)}</span>
                <Link to={`albums/${album.id.attributes['im:id']}`}>
                    <p className="album-name">{truncate(album['im:name'].label,18)}</p>
                </Link>
            </div>
         </article>
    )
}