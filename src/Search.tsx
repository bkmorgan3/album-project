import { useContext, useState } from "react"
import { AlbumContext } from "./AlbumContext"


export default function Search() {
    const {fetchedAlbums, setSearchedAlbums} = useContext(AlbumContext)
    const [term, setTerm] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setTerm("")
        
       setSearchedAlbums(fetchedAlbums.filter(album => album['im:artist'].label === term))
    }
   
    return (
        <div>
            <form onSubmit={(e) => handleSearch(e)}>
                <label htmlFor="search">Search for an Artist</label>
                <input type="text" name="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="search " id="search" />
                <button>Search</button>
            </form>
        </div>
        )
}