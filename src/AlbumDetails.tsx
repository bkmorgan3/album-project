import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import AlbumDetailsPage from './AlbumDetailsPage'
import type { AlbumAndTracks } from './AlbumDetailsPage'

export default function AlbumDetails() {
    const [album, setAlbum] = useState<AlbumAndTracks>()
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    
    console.log(album)

    useEffect(() => {
        fetchAlbumDetails()
    },[])

    async function fetchAlbumDetails() {
        const album = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`, {mode: 'no-cors'})
        const json = await album.json()
        setAlbum(json.results)
        setIsLoading(false)
        return
    }

    return (
        <div>
            {
            isLoading ?
            <span>Loading... </span> : 
            album && <AlbumDetailsPage album={album} />
        }
        </div>
    )
}