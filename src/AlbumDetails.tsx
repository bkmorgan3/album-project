import { useContext } from 'react'
import { AlbumContext } from "./AlbumContext"


export default function AlbumDetails() {
    const { selectedAlbum, setSelectedAlbum } = useContext(AlbumContext)
    return (
        <div>
            <div className="heading">
                <div className="image">
                    <img src={selectedAlbum['im:image'][2].label} alt="" />
                </div>
                <div className="details">
                    <p className="artist">
                        {selectedAlbum['im:artist'].label}
                    </p>
                    <p className="title">{selectedAlbum['im:name'].label}</p>
                    <div className="metadata">
                        <p>{selectedAlbum['im:releaseDate'].label.slice(0,4)}&nbsp;- &nbsp; </p>
                        <p>{selectedAlbum.category.attributes.term}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}