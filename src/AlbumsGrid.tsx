import { useState, useEffect, useContext } from "react"
import AlbumsList from "./AlbumsList"
import type { AlbumsProps } from "./AlbumsList"
import { AlbumContext } from "./AlbumContext"

export default function AlbumsGrid() {
    const [albums, setAlbums] = useState<AlbumsProps[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const { setFetchedAlbums } = useContext(AlbumContext)

    useEffect(() => {
        fetchAlbums()
    },[])

    async function fetchAlbums() {
        const albums = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        const json = await albums.json()
        setAlbums(json.feed.entry)
        setIsLoading(false)
        setFetchedAlbums(json.feed.entry)
    }
    return (
        <section>
            {
                isLoading ? 
                <span>Loading...</span> : 
                albums && <AlbumsList albums={albums} />
            }
        </section>
    )
}