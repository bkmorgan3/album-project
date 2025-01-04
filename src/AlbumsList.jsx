import { useState, useEffect } from "react"
import Album from "./Album"

export default function AlbumsList({albums}) {
    console.log("A", albums)
    return (
        <div className="container">
            { albums.map(album => (
                <Album key={album.id.attributes['im:id']} album={album} />
               ))}
        </div>
    )
}