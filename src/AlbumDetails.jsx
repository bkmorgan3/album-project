import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export default function AlbumDetails() {
    const [album, setAlbum] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const tracks = !!album && album.slice(1)
    console.log(album)

    useEffect(() => {
        fetchAlbumDetails()
    },[])

    async function fetchAlbumDetails() {
        const album = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
        const json = await album.json()
        setAlbum(json.results)
        setIsLoading(false)
    }

    return (
        <div>
            {
            isLoading ?
            <span>Loading... </span> : 
             <div>

                <div className='heading'>
                    <div className='image'>
                        <img src={album[0].artworkUrl100} />
                    </div>
                    <div className='details'>
                    <p className="artist">{album[0].artistName}</p>
                    <p className="title">{album[0].collectionName}</p>
                    <div className="metadata"> <p>{album[0].releaseDate.slice(0,4)} &nbsp;- &nbsp; </p>
            <p>{album[0].primaryGenreName}</p> </div>
            
            </div>
                    </div>

            <ol className='tracks'>
                {tracks.map((track => (
                    <li key={track.trackId}>{track.trackName}</li>
                )))}
            </ol>
             </div>
        }
        </div>
    )
}