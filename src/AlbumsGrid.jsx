import { useState, useEffect } from "react"
import AlbumsList from "./AlbumsList"


export default function AlbumsGrid() {
    const [albums, setAlbums] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetchAlbums()
    },[])

    async function fetchAlbums() {
        const albums = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        const json = await albums.json()
        setAlbums(json.feed.entry)
        setIsLoading(false)
    }
    return (
        <section>
            {
                isLoading ? 
                <span>Loading...</span> : 
              <AlbumsList albums={albums} />
            }
        </section>
    )
}